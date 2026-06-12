'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import slugify from 'slugify';
import 'react-quill/dist/quill.snow.css';

// ReactQuill must be imported dynamically to prevent SSR errors (window not defined)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function EditArticlePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [keywords, setKeywords] = useState('');
  const [metaDesc, setMetaDesc] = useState('');
  const [published, setPublished] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetch(`/api/articles/${params.id}`)
      .then(res => {
        if (!res.ok) throw new Error('Artikel tidak ditemukan');
        return res.json();
      })
      .then(data => {
        setTitle(data.title || '');
        setContent(data.content || '');
        setExcerpt(data.excerpt || '');
        setImageUrl(data.imageUrl || '');
        setAuthor(data.author || '');
        setKeywords(data.keywords || '');
        setMetaDesc(data.metaDesc || '');
        setPublished(data.published || false);
      })
      .catch(err => toast.error(err.message))
      .finally(() => setIsFetching(false));
  }, [params.id]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) throw new Error('Upload gagal');
      const data = await res.json();
      setImageUrl(data.url);
      toast.success('Gambar berhasil diunggah');
    } catch (err: any) {
      toast.error('Gagal mengunggah gambar');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch(`/api/articles/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          excerpt,
          imageUrl,
          author,
          keywords,
          metaDesc,
          published,
        }),
      });

      if (!res.ok) throw new Error('Gagal menyimpan perubahan');
      
      toast.success('Artikel berhasil diperbarui!');
      setTimeout(() => {
        router.push('/admin/articles');
        router.refresh();
      }, 1000);
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  if (isFetching) return <div className="p-8 text-center text-slate-500">Memuat artikel...</div>;

  return (
    <div className="p-8 max-w-4xl">
      <Toaster />
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/articles" className="p-2 text-slate-400 hover:text-ink hover:bg-slate-100 rounded-lg transition">
          <ArrowLeft size={20} />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-ink">Edit Artikel</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Judul Artikel</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Kutipan Singkat (Excerpt)</label>
            <textarea
              className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-20"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Gambar Cover (Upload / URL)</label>
              <div className="space-y-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={isUploading}
                  className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                />
                <input
                  type="text"
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              {imageUrl && <img src={imageUrl} alt="Cover Preview" className="mt-3 h-32 w-auto object-cover rounded-lg border" />}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nama Penulis</label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">SEO Keywords</label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">SEO Meta Description</label>
              <textarea
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary h-12"
                value={metaDesc}
                onChange={(e) => setMetaDesc(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Konten Lengkap</label>
            <div className="bg-white">
              <ReactQuill 
                theme="snow" 
                value={content} 
                onChange={setContent} 
                modules={modules}
                className="h-[400px] mb-12"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="published"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary"
            />
            <label htmlFor="published" className="text-sm font-medium text-slate-700">
              Publikasikan Artikel
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading || !title || !content}
            className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-dark disabled:opacity-50"
          >
            {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </div>
      </form>
    </div>
  );
}
