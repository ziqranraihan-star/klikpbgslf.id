const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

// Simulate the data from site.ts
const hero = {
  headline: 'Urus PBG & SLF Tanpa Ribet, Bangunan Anda Legal & Aman',
  subheadline: 'Kami bantu proses Persetujuan Bangunan Gedung dan Sertifikat Laik Fungsi — dari penyiapan dokumen teknis, pendampingan SIMBG, hingga penerbitan sertifikat.',
  chips: ['PBG', 'SLF', 'SIMBG', 'Gambar Teknis', 'Konsultasi'],
  primaryCta: 'Konsultasi Gratis via WhatsApp',
  secondaryCta: 'Lihat Paket Layanan',
  badge: 'Konsultan PBG & SLF Terpercaya',
  proofs: ['Tim ahli bersertifikat', 'Proses transparan', 'Seluruh Indonesia'],
};

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
    },
  });
  console.log('Admin seeded!');

  // Simple seed for hero content
  await prisma.siteContent.upsert({
    where: { section: 'hero' },
    update: { data: JSON.stringify(hero) },
    create: { section: 'hero', data: JSON.stringify(hero) },
  });
  console.log('Content seeded!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
