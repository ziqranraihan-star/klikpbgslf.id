export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  slug: 'pbg' | 'slf' | 'pendukung';
  short: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
};

export type PackageItem = {
  name: string;
  subtitle: string;
  priceFrom: string;
  features: string[];
  serviceLabel: string;
  ctaLabel: string;
  highlight?: boolean;
};

export type PackageGroup = {
  id: 'pbg' | 'slf';
  label: string;
  description: string;
  packages: PackageItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'instagram' | 'facebook' | 'whatsapp';
};

export type HeroContent = {
  headline: string;
  subheadline: string;
  chips: string[];
  primaryCta: string;
  secondaryCta: string;
  badge: string;
  proofs: string[];
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type WhyUsItem = {
  title: string;
  description: string;
};

/* ── Site Meta ── */
export const siteMeta = {
  name: 'klikpbgslf.id',
  title: 'klikpbgslf.id | Jasa Konsultan PBG & SLF Terpercaya',
  description:
    'Konsultan profesional untuk pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF). Proses cepat, transparan, dan didampingi tim ahli bersertifikat.',
  url: 'https://konsultanpbgslf.id',
  locale: 'id_ID',
  ogImage: '/og-image.svg',
  themeColor: '#D4620A',
  favicon: '/favicon.svg',
};

/* ── WhatsApp ── */
export const whatsappNumber = '6287896811291';

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const buildPackageMessage = (serviceLabel: string, packageName: string) =>
  `Halo klikpbgslf.id, saya tertarik dengan paket ${serviceLabel}: ${packageName}. Bisa bantu jelaskan lebih lanjut?`;

export const generalConsultationMessage =
  'Halo klikpbgslf.id! Saya ingin konsultasi tentang kebutuhan PBG/SLF untuk bangunan saya.';

export const buildServiceMessage = (serviceTitle: string) =>
  `Halo klikpbgslf.id! Saya ingin tahu lebih lanjut tentang layanan ${serviceTitle}.`;

/* ── Navigation ── */
export const navMenu: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Proses', href: '/#proses' },
  { label: 'Paket', href: '/#paket' },
  { label: 'Artikel', href: '/artikel' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontak', href: '/#kontak' },
];

/* ── Hero ── */
export const hero: HeroContent = {
  headline: 'Urus PBG & SLF Tanpa Ribet, Bangunan Anda Legal & Aman',
  subheadline:
    'Kami bantu proses Persetujuan Bangunan Gedung dan Sertifikat Laik Fungsi — dari penyiapan dokumen teknis, pendampingan SIMBG, hingga penerbitan sertifikat.',
  chips: ['PBG', 'SLF', 'SIMBG', 'Gambar Teknis', 'Konsultasi'],
  primaryCta: 'Konsultasi Gratis via WhatsApp',
  secondaryCta: 'Lihat Paket Layanan',
  badge: 'Konsultan PBG & SLF Terpercaya',
  proofs: ['Tim ahli bersertifikat', 'Proses transparan', 'Seluruh Indonesia'],
};

/* ── Services ── */
export const services: Service[] = [
  {
    title: 'PBG — Persetujuan Bangunan Gedung',
    slug: 'pbg',
    short: 'Izin wajib sebelum memulai pembangunan, renovasi, atau perubahan fungsi bangunan gedung.',
    description:
      'Kami bantu proses pengurusan PBG dari A-Z — mulai dari penyusunan dokumen teknis, gambar arsitektur & struktur, hingga pendampingan verifikasi di SIMBG dan koordinasi dengan Dinas PU setempat.',
    highlights: [
      'Penyusunan gambar teknis arsitektur, struktur, MEP',
      'Pendampingan input dokumen ke SIMBG',
      'Koordinasi dengan Dinas PU & TPA daerah',
      'Bangunan baru, renovasi, dan perubahan fungsi',
    ],
    ctaLabel: 'Lihat Paket PBG',
  },
  {
    title: 'SLF — Sertifikat Laik Fungsi',
    slug: 'slf',
    short: 'Sertifikat yang menyatakan bangunan laik fungsi dan memenuhi standar keselamatan, kesehatan, dan kenyamanan.',
    description:
      'Kami dampingi proses SLF dari audit kelaikan fungsi, penyusunan As-Built Drawing, pengujian teknis, hingga penerbitan sertifikat melalui SIMBG.',
    highlights: [
      'Audit kelaikan fungsi bangunan',
      'Penyusunan As-Built Drawing',
      'Laporan pengujian teknis (struktur, MEP, proteksi kebakaran)',
      'SLF bangunan baru dan perpanjangan',
    ],
    ctaLabel: 'Lihat Paket SLF',
  },
  {
    title: 'Layanan Pendukung',
    slug: 'pendukung',
    short: 'Layanan teknis tambahan untuk mendukung proses perizinan bangunan Anda.',
    description:
      'Selain PBG dan SLF, kami juga menyediakan layanan pembuatan gambar teknis, perhitungan struktur, dan penyusunan dokumen lingkungan yang diperlukan untuk proses perizinan.',
    highlights: [
      'Gambar arsitektur, struktur, & MEP',
      'Perhitungan struktur bangunan',
      'Dokumen lingkungan (SPPL/UKL-UPL)',
      'Konsultasi regulasi bangunan gedung',
    ],
    ctaLabel: 'Konsultasi Sekarang',
  },
];

export const servicesSection = {
  eyebrow: 'Layanan',
  title: 'Solusi Lengkap Perizinan Bangunan Gedung',
  description:
    'Dari PBG untuk bangunan baru hingga SLF untuk bangunan eksisting — semua dikerjakan oleh tim ahli bersertifikat dengan pengalaman di sistem SIMBG.',
  highlight: 'Konsultasi gratis untuk semua layanan. Hubungi kami sekarang.',
};

/* ── Process Steps ── */
export const processSteps: ProcessStep[] = [
  {
    title: 'Konsultasi Awal',
    description: 'Diskusi kebutuhan, evaluasi dokumen, dan penentuan scope layanan.',
  },
  {
    title: 'Pengumpulan Data',
    description: 'Penyiapan dokumen administratif dan survei lapangan jika diperlukan.',
  },
  {
    title: 'Penyusunan Dokumen',
    description: 'Pembuatan gambar arsitektur, struktur, MEP, dan laporan teknis.',
  },
  {
    title: 'Pengajuan SIMBG',
    description: 'Input data dan upload dokumen ke sistem SIMBG secara online.',
  },
  {
    title: 'Pendampingan Verifikasi',
    description: 'Koordinasi dengan Dinas PU dan Tim Profesi Ahli (TPA).',
  },
  {
    title: 'Penerbitan Sertifikat',
    description: 'PBG/SLF diterbitkan secara elektronik dan siap digunakan.',
  },
];

export const processSection = {
  eyebrow: 'Proses',
  title: 'Langkah Mudah Mengurus PBG & SLF',
  description:
    'Kami dampingi dari awal hingga sertifikat terbit. Anda cukup sediakan data, sisanya kami yang urus.',
};

/* ── Why Us ── */
export const whyUsItems: WhyUsItem[] = [
  {
    title: 'Tim Ahli Bersertifikat',
    description: 'Didukung tenaga ahli berlisensi dengan pengalaman di sistem SIMBG nasional.',
  },
  {
    title: 'Proses Cepat & Transparan',
    description: 'Timeline jelas, progres real-time, dan update berkala setiap tahap.',
  },
  {
    title: 'Harga Kompetitif',
    description: 'Biaya jelas di awal, tanpa biaya tersembunyi, bayar bertahap.',
  },
  {
    title: 'Seluruh Jenis Bangunan',
    description: 'Rumah tinggal, ruko, gedung komersial, industri, hingga bangunan pemerintah.',
  },
  {
    title: 'Dokumen Lengkap',
    description: 'Gambar teknis, perhitungan struktur, hingga dokumen lingkungan — semua kami siapkan.',
  },
  {
    title: 'Pendampingan Penuh',
    description: 'Dari konsultasi awal, pengajuan SIMBG, hingga sertifikat terbit di tangan Anda.',
  },
];

export const whyUsSection = {
  eyebrow: 'Keunggulan',
  title: 'Mengapa Memilih klikpbgslf.id?',
  description:
    'Kami hadir sebagai mitra terpercaya dalam proses perizinan bangunan gedung Anda.',
};

/* ── Packages ── */
export const packagesGrouped: PackageGroup[] = [
  {
    id: 'pbg',
    label: 'PBG',
    description: 'Paket pengurusan Persetujuan Bangunan Gedung (PBG) untuk berbagai jenis bangunan.',
    packages: [
      {
        name: 'Rumah Tinggal',
        subtitle: 'PBG untuk rumah tinggal sederhana dan menengah.',
        priceFrom: 'Rp 3 jt',
        features: [
          'Gambar arsitektur & struktur',
          'Dokumen administrasi lengkap',
          'Input & upload ke SIMBG',
          'Pendampingan verifikasi',
          'Koordinasi Dinas PU',
        ],
        serviceLabel: 'PBG',
        ctaLabel: 'Konsultasi Sekarang',
      },
      {
        name: 'Komersial',
        subtitle: 'PBG untuk ruko, toko, kantor, dan bangunan komersial.',
        priceFrom: 'Rp 7 jt',
        features: [
          'Semua fitur Rumah Tinggal',
          'Gambar MEP lengkap',
          'Perhitungan struktur',
          'Dokumen lingkungan (SPPL)',
          'Konsultasi TPA',
          'Revisi dokumen',
        ],
        serviceLabel: 'PBG',
        ctaLabel: 'Konsultasi Sekarang',
        highlight: true,
      },
      {
        name: 'Gedung & Industri',
        subtitle: 'PBG untuk gedung bertingkat, pabrik, dan bangunan khusus.',
        priceFrom: 'Rp 15 jt',
        features: [
          'Semua fitur Komersial',
          'Perhitungan struktur kompleks',
          'AMDAL / UKL-UPL',
          'Pendampingan presentasi teknis',
          'Koordinasi lintas instansi',
        ],
        serviceLabel: 'PBG',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
  {
    id: 'slf',
    label: 'SLF',
    description: 'Paket pengurusan Sertifikat Laik Fungsi (SLF) untuk bangunan baru maupun eksisting.',
    packages: [
      {
        name: 'SLF Baru',
        subtitle: 'SLF untuk bangunan yang baru selesai dibangun.',
        priceFrom: 'Rp 5 jt',
        features: [
          'As-Built Drawing',
          'Laporan uji laik fungsi',
          'Inspeksi lapangan',
          'Input & upload ke SIMBG',
          'Pendampingan verifikasi',
        ],
        serviceLabel: 'SLF',
        ctaLabel: 'Konsultasi Sekarang',
      },
      {
        name: 'SLF Perpanjangan',
        subtitle: 'Perpanjangan SLF untuk bangunan eksisting.',
        priceFrom: 'Rp 4 jt',
        features: [
          'Audit kelaikan fungsi',
          'Update As-Built Drawing',
          'Laporan kondisi bangunan',
          'Rekomendasi perbaikan',
          'Input & upload ke SIMBG',
        ],
        serviceLabel: 'SLF',
        ctaLabel: 'Konsultasi Sekarang',
        highlight: true,
      },
      {
        name: 'SLF Kompleks',
        subtitle: 'SLF untuk gedung bertingkat dan bangunan khusus.',
        priceFrom: 'Rp 12 jt',
        features: [
          'Semua fitur SLF Baru',
          'Pengujian struktur (NDT)',
          'Audit proteksi kebakaran',
          'Audit instalasi MEP',
          'Laporan komprehensif',
        ],
        serviceLabel: 'SLF',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
];

/* ── FAQ ── */
export const faqs: FaqItem[] = [
  {
    question: 'Apa itu PBG dan bedanya dengan IMB?',
    answer:
      'PBG (Persetujuan Bangunan Gedung) adalah izin yang menggantikan IMB berdasarkan PP 16/2021. PBG wajib dimiliki sebelum memulai pembangunan, renovasi, atau perubahan fungsi bangunan gedung. Seluruh prosesnya dilakukan secara online melalui SIMBG.',
  },
  {
    question: 'Siapa yang wajib memiliki PBG?',
    answer:
      'Setiap orang atau badan yang akan mendirikan, mengubah, memperluas, atau merawat bangunan gedung wajib memiliki PBG. Ini berlaku untuk semua jenis bangunan — dari rumah tinggal hingga gedung komersial dan industri.',
  },
  {
    question: 'Apa itu SLF dan mengapa penting?',
    answer:
      'SLF (Sertifikat Laik Fungsi) adalah sertifikat yang menyatakan bangunan layak digunakan karena telah memenuhi standar keselamatan, kesehatan, kenyamanan, dan kemudahan. Tanpa SLF, bangunan dianggap tidak layak fungsi dan bisa dikenai sanksi.',
  },
  {
    question: 'Berapa lama proses pengurusan PBG?',
    answer:
      'Untuk rumah tinggal sederhana bisa 2-4 minggu. Untuk bangunan komersial dan gedung, biasanya 4-8 minggu tergantung kompleksitas dan responsivitas dinas daerah. Dengan pendampingan kami, prosesnya bisa lebih efisien.',
  },
  {
    question: 'Apakah bangunan lama yang belum punya IMB bisa diurus?',
    answer:
      'Bisa. Bangunan eksisting yang belum memiliki IMB/PBG dapat mengajukan melalui sistem SIMBG untuk mendapatkan legalitas resmi. Kami siap membantu proses legalisasi bangunan Anda.',
  },
  {
    question: 'Dokumen apa saja yang perlu disiapkan?',
    answer:
      'Secara umum: KTP pemilik, bukti kepemilikan tanah (SHM/AJB), PBB terakhir, dan surat pernyataan. Untuk dokumen teknis seperti gambar arsitektur dan perhitungan struktur, kami yang siapkan.',
  },
  {
    question: 'Apakah proses bisa dilakukan secara online?',
    answer:
      'Ya. Seluruh proses PBG dan SLF dilakukan secara online melalui SIMBG (simbg.pu.go.id). Kami bantu proses input dan upload dokumen di sistem sehingga Anda tidak perlu repot.',
  },
  {
    question: 'Apa risiko jika tidak memiliki PBG/SLF?',
    answer:
      'Bangunan tanpa PBG/SLF dapat dikenai sanksi administratif seperti peringatan tertulis, pembatasan kegiatan, pembekuan, hingga perintah pembongkaran. Bangunan juga tidak dapat diasuransikan atau dijadikan jaminan kredit.',
  },
];

/* ── Contact ── */
export const contact = {
  address: 'Jakarta, Indonesia',
  email: 'info@konsultanpbgslf.id',
  phone: '087896811291',
  whatsapp: '087896811291',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/dekakons', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/dekakons', icon: 'facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/6287896811291', icon: 'whatsapp' },
  ] as SocialLink[],
};

export const contactSection = {
  title: 'Siap mengurus perizinan bangunan Anda?',
  description:
    'Konsultasikan kebutuhan PBG & SLF Anda. Kami siap bantu dari evaluasi awal hingga sertifikat terbit — tanpa ribet.',
  channelTitle: 'Hubungi Kami',
  channelDescription: 'Pilih kanal yang paling nyaman untuk diskusi awal.',
  hoursLabel: 'Jam Operasional',
  hoursValue: 'Senin – Sabtu, 08.00 – 17.00 WIB',
};
