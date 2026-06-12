'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, AlertCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { DynamicFormEditor } from './DynamicFormEditor';

export default function ContentEditorPage() {
  const router = useRouter();
  const [content, setContent] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setIsLoading(false);
      })
      .catch(err => {
        toast.error('Gagal memuat data');
        setIsLoading(false);
      });
  }, []);

  const handleSave = async (section: string, newDataStr: string) => {
    try {
      // Validate JSON
      JSON.parse(newDataStr);
      setIsSaving(true);
      
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ section, data: newDataStr }),
      });

      if (!res.ok) throw new Error('Gagal menyimpan');
      
      toast.success(`Berhasil menyimpan bagian ${section}`);
    } catch (error: any) {
      toast.error('Format JSON tidak valid atau gagal menyimpan');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="p-8">Memuat data...</div>;

  return (
    <div className="p-8 max-w-6xl">
      <Toaster />
      <div>
        <h1 className="text-3xl font-bold text-ink">Copywriting Web</h1>
        <p className="mt-2 text-slate-500">Edit semua teks, judul, dan data pada website utama di sini menggunakan format JSON.</p>
        
        <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-200 flex gap-3 text-blue-800">
          <AlertCircle className="shrink-0 mt-0.5" size={20} />
          <div className="text-sm">
            <strong>Informasi:</strong> Perubahan teks di sini akan langsung ditampilkan di website utama (Halaman Beranda). Anda dapat mengubah teks, menambah item layanan, dan menghapus yang tidak perlu secara visual tanpa kode.
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {content.map((item) => (
          <DynamicFormEditor 
             key={item.section} 
             section={item.section} 
             initialData={item.data} 
             onSave={handleSave} 
             isSaving={isSaving} 
          />
        ))}
      </div>
    </div>
  );
}
