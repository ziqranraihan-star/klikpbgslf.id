import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcryptjs';
import {
  hero,
  servicesSection,
  services,
  processSection,
  processSteps,
  whyUsSection,
  whyUsItems,
  faqs,
  contact,
  contactSection,
  packagesGrouped
} from '../../../data/site';

export async function GET() {
  try {
    console.log("Starting setup...");
    
    // 1. Create Admin User
    const adminPassword = await bcrypt.hash('password123', 10);
    const admin = await prisma.user.upsert({
      where: { username: 'admin' },
      update: {},
      create: {
        username: 'admin',
        password: adminPassword,
      },
    });
    console.log("Admin user checked/created");

    // 2. Create Site Content
    const contentToSeed = [
      { section: 'hero', data: JSON.stringify(hero) },
      { section: 'servicesSection', data: JSON.stringify(servicesSection) },
      { section: 'services', data: JSON.stringify(services) },
      { section: 'processSection', data: JSON.stringify(processSection) },
      { section: 'processSteps', data: JSON.stringify(processSteps) },
      { section: 'whyUsSection', data: JSON.stringify(whyUsSection) },
      { section: 'whyUsItems', data: JSON.stringify(whyUsItems) },
      { section: 'packagesGrouped', data: JSON.stringify(packagesGrouped) },
      { section: 'faqs', data: JSON.stringify(faqs) },
      { section: 'contact', data: JSON.stringify(contact) },
      { section: 'contactSection', data: JSON.stringify(contactSection) },
    ];

    for (const item of contentToSeed) {
      await prisma.siteContent.upsert({
        where: { section: item.section },
        update: {}, // Jangan timpa jika sudah ada
        create: { section: item.section, data: item.data },
      });
    }
    console.log("Site content checked/created");

    // 3. Create 3 Dummy Articles
    const dummyArticles = [
      {
        title: "Pentingnya PBG untuk Bangunan Komersial",
        slug: "pentingnya-pbg-bangunan-komersial",
        excerpt: "Persetujuan Bangunan Gedung (PBG) kini menjadi syarat mutlak bagi bangunan komersial. Ketahui alasan dan prosesnya.",
        content: "<p>Persetujuan Bangunan Gedung (PBG) adalah perizinan yang dikeluarkan oleh pemerintah kepada pemilik bangunan gedung untuk membangun baru, mengubah, memperluas, mengurangi, dan/atau merawat bangunan gedung sesuai dengan standar teknis bangunan gedung.</p><p>Bagi bangunan komersial, memiliki PBG bukan hanya soal kepatuhan hukum, tetapi juga menjamin keselamatan, kenyamanan, dan nilai investasi bangunan tersebut di masa depan.</p>",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
        author: "Tim klikpbgslf.id",
        keywords: "PBG, Bangunan Komersial, Izin Mendirikan Bangunan",
        metaDesc: "Panduan lengkap mengapa PBG sangat penting untuk bangunan komersial Anda.",
        published: true
      },
      {
        title: "Perbedaan IMB Lama dan PBG Baru",
        slug: "perbedaan-imb-lama-dan-pbg",
        excerpt: "Pemerintah telah mengganti IMB menjadi PBG. Apa saja perbedaannya dan bagaimana cara mengurus transisinya?",
        content: "<p>Banyak masyarakat yang masih bingung mengenai transisi dari IMB (Izin Mendirikan Bangunan) ke PBG (Persetujuan Bangunan Gedung). Secara konsep, PBG lebih menitikberatkan pada standar teknis keandalan bangunan gedung.</p><p>Jika IMB harus diurus sebelum membangun, PBG memberikan fleksibilitas namun dengan pengawasan teknis yang jauh lebih ketat melalui Sistem Informasi Manajemen Bangunan Gedung (SIMBG).</p>",
        imageUrl: "https://images.unsplash.com/photo-1541888081622-0941541094f3?q=80&w=1000&auto=format&fit=crop",
        author: "Tim Ahli klikpbgslf.id",
        keywords: "IMB, PBG, Perbedaan IMB PBG, SIMBG",
        metaDesc: "Kupas tuntas perbedaan utama antara sistem IMB lama dengan PBG yang baru berlaku.",
        published: true
      },
      {
        title: "Kapan Anda Membutuhkan SLF?",
        slug: "kapan-membutuhkan-slf",
        excerpt: "Sertifikat Laik Fungsi (SLF) wajib dimiliki setelah bangunan selesai. Pelajari kapan dan bagaimana cara mengurusnya.",
        content: "<p>Sertifikat Laik Fungsi (SLF) adalah sertifikat yang diberikan oleh Pemerintah Daerah terhadap bangunan gedung yang telah selesai dibangun dan telah memenuhi persyaratan kelaikan fungsi.</p><p>SLF wajib diurus sebelum bangunan gedung dimanfaatkan. Tanpa SLF, bangunan gedung komersial tidak dapat beroperasi secara legal dan tidak dapat diterbitkan perizinan usahanya.</p>",
        imageUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop",
        author: "Konsultan SLF",
        keywords: "SLF, Sertifikat Laik Fungsi, Izin Operasional Bangunan",
        metaDesc: "Ketahui waktu yang tepat dan tata cara pengurusan Sertifikat Laik Fungsi (SLF) untuk bangunan Anda.",
        published: true
      }
    ];

    for (const article of dummyArticles) {
      await prisma.article.upsert({
        where: { slug: article.slug },
        update: {},
        create: article,
      });
    }
    console.log("Articles checked/created");

    return NextResponse.json({ 
      success: true,
      message: 'Setup completed successfully! 1 Admin, Site Content, and 3 Articles have been created.' 
    });
  } catch (error: any) {
    console.error("Setup Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
