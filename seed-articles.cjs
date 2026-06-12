const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // 1. Replace 'DekaKons' in SiteContent
  const contents = await prisma.siteContent.findMany();
  for (const c of contents) {
    if (c.data.includes('DekaKons')) {
      const updatedData = c.data.replace(/DekaKons/g, 'klikpbgslf.id');
      await prisma.siteContent.update({
        where: { id: c.id },
        data: { data: updatedData }
      });
    }
  }
  console.log('✅ Updated SiteContent JSON strings');

  // 2. Add 3 Dummy Articles
  const articles = [
    {
      title: 'Pentingnya SLF untuk Gedung Komersial Anda',
      slug: 'pentingnya-slf-gedung-komersial-anda',
      excerpt: 'Sertifikat Laik Fungsi (SLF) bukan hanya soal legalitas, tetapi menjamin keselamatan pengunjung dan nilai investasi gedung komersial.',
      content: '<p>Setiap bangunan gedung yang telah selesai dibangun wajib memiliki <strong>Sertifikat Laik Fungsi (SLF)</strong> sebelum dimanfaatkan. SLF adalah jaminan dari pemerintah daerah bahwa bangunan tersebut aman, sehat, nyaman, dan mudah diakses.</p><h2>Kenapa Gedung Komersial Wajib SLF?</h2><ul><li><strong>Aspek Keselamatan:</strong> Menjamin struktur bangunan kuat dan aman dari potensi bahaya seperti gempa atau kebakaran.</li><li><strong>Aspek Legalitas:</strong> Syarat mutlak untuk mengurus izin usaha dan asuransi properti. Tanpa SLF, operasional gedung bisa dihentikan.</li><li><strong>Kepercayaan Penyewa:</strong> Tenant atau penyewa akan lebih percaya menyewa di gedung yang sudah memiliki SLF karena aspek K3-nya terjamin.</li></ul><p>Jangan tunggu sampai ada teguran dari dinas terkait. Urus SLF Anda sekarang melalui tim ahli klikpbgslf.id!</p>',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      author: 'Tim klikpbgslf.id',
      keywords: 'pentingnya slf, slf gedung komersial, urus slf cepat',
      metaDesc: 'Penjelasan lengkap mengapa Sertifikat Laik Fungsi (SLF) sangat penting untuk operasional dan legalitas gedung komersial Anda.',
      published: true
    },
    {
      title: 'Panduan Lengkap Mengurus PBG Tahun 2026',
      slug: 'panduan-lengkap-mengurus-pbg-2026',
      excerpt: 'Persyaratan pengurusan Persetujuan Bangunan Gedung (PBG) mengalami beberapa pembaruan. Simak panduan lengkapnya di sini.',
      content: '<p>Persetujuan Bangunan Gedung (PBG) telah menggantikan IMB (Izin Mendirikan Bangunan). Meski tujuannya sama, prosesnya kini lebih terintegrasi melalui sistem SIMBG.</p><h2>Langkah-Langkah Mengurus PBG:</h2><ol><li><strong>Persiapan Dokumen Teknis:</strong> Gambar arsitektur, gambar struktur, MEP (Mekanikal, Elektrikal, Plumbing), dan perhitungan struktur.</li><li><strong>Pendaftaran di SIMBG:</strong> Mengunggah semua dokumen ke portal resmi pemerintah.</li><li><strong>Sidang TPA/TPT:</strong> Dokumen akan diperiksa oleh Tim Profesi Ahli (TPA) atau Tim Penilai Teknis (TPT). Jika ada revisi, pemohon wajib memperbaiki dokumen.</li><li><strong>Penerbitan Retribusi & PBG:</strong> Setelah dokumen disetujui, pemohon membayar retribusi dan PBG resmi diterbitkan.</li></ol><p>Kesulitan menyusun dokumen teknis? Konsultasikan dengan klikpbgslf.id, kami siap membantu dari awal hingga PBG terbit.</p>',
      imageUrl: 'https://images.unsplash.com/photo-1541888086925-0c13d4cc450a?q=80&w=2070&auto=format&fit=crop',
      author: 'Tim klikpbgslf.id',
      keywords: 'panduan urus pbg, pbg 2026, beda imb dan pbg, cara buat pbg',
      metaDesc: 'Panduan step-by-step cara mengurus Persetujuan Bangunan Gedung (PBG) terbaru tahun 2026 beserta persyaratannya.',
      published: true
    },
    {
      title: 'Perbedaan PBG dan SLF: Kapan Harus Mengurusnya?',
      slug: 'perbedaan-pbg-dan-slf-kapan-mengurus',
      excerpt: 'Sering bingung antara PBG dan SLF? Ketahui perbedaan fungsi dan waktu pengurusannya agar pembangunan proyek Anda tidak terhambat.',
      content: '<p>Banyak pemilik bangunan masih bingung membedakan antara PBG dan SLF. Secara sederhana, keduanya ibarat "SIM" dan "STNK" untuk bangunan Anda.</p><h3>1. PBG (Persetujuan Bangunan Gedung)</h3><p>PBG adalah izin yang harus dimiliki <strong>SEBELUM</strong> atau saat proses mendirikan bangunan baru, mengubah, memperluas, atau mengurangi bangunan gedung. PBG memastikan bahwa rencana/desain bangunan Anda sudah sesuai standar teknis.</p><h3>2. SLF (Sertifikat Laik Fungsi)</h3><p>SLF adalah sertifikat yang diberikan <strong>SETELAH</strong> bangunan selesai dibangun dan sebelum bangunan tersebut mulai dimanfaatkan/digunakan. SLF membuktikan bahwa bangunan fisik yang berdiri sudah sesuai dengan dokumen PBG yang disetujui sebelumnya.</p><blockquote><p>Ingat: Anda butuh PBG untuk mulai membangun, dan butuh SLF untuk mulai menggunakan bangunan tersebut.</p></blockquote>',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
      author: 'Admin',
      keywords: 'perbedaan pbg dan slf, kapan urus pbg, kapan urus slf',
      metaDesc: 'Penjelasan mendetail mengenai perbedaan antara Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF).',
      published: true
    }
  ];

  for (const art of articles) {
    await prisma.article.upsert({
      where: { slug: art.slug },
      update: art,
      create: art
    });
  }
  console.log('✅ Inserted 3 dummy articles');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
