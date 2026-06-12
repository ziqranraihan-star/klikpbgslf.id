export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  slug: 'web' | 'aplikasi' | 'desktop' | 'games' | 'iot';
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
  id: 'web' | 'app' | 'desktop' | 'games' | 'iot';
  label: string;
  description: string;
  packages: PackageItem[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  description: string;
  href: string;
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
  networkNodes: string[];
  deliverySteps: string[];
};

export const siteMeta = {
  name: 'Makassar Techno',
  title: 'Makassar Techno | Platform Digital Modern untuk Bisnis Anda',
  description:
    'Studio teknologi digital di Makassar — website, aplikasi mobile, desktop app, games, dan IoT. Solusi digital end-to-end dari konsep hingga deployment.',
  url: 'https://makassartechno.com',
  locale: 'id_ID',
  ogImage: '/og-image.svg',
  themeColor: '#0060F0',
  favicon: '/favicon.svg',
};

export const whatsappNumber = '6282292725733';

export const buildWhatsAppLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const buildPackageMessage = (serviceLabel: string, packageName: string) =>
  `Halo Makassar Techno, saya tertarik dengan paket ${serviceLabel}: ${packageName}. Bisa bantu jelaskan lebih lanjut?`;

export const generalConsultationMessage =
  'Halo Makassar Techno! Saya ingin konsultasi tentang kebutuhan platform digital untuk bisnis saya.';

export const buildServiceMessage = (serviceTitle: string) =>
  `Halo Makassar Techno! Saya ingin tahu lebih lanjut tentang layanan ${serviceTitle}.`;

export const navMenu: NavItem[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/#layanan' },
  { label: 'Portofolio', href: '/#portofolio' },
  { label: 'Paket', href: '/#paket' },
  { label: 'Kontak', href: '/#kontak' },
];

export const hero: HeroContent = {
  headline: 'Platform Digital yang Menggerakkan Bisnis Anda',
  subheadline:
    'Dari website profesional, aplikasi mobile, desktop app, games, hingga sistem IoT — kami rancang, bangun, dan deliver solusi digital yang benar-benar siap pakai.',
  chips: ['Website', 'Mobile App', 'Desktop App', 'Games', 'IoT'],
  primaryCta: 'Konsultasi via WhatsApp',
  secondaryCta: 'Lihat Paket',
  badge: 'Studio Digital Makassar',
  proofs: ['Scope & milestone jelas', 'End-to-end delivery', 'Support lokal & remote'],
  networkNodes: ['Web Platform', 'Mobile App', 'Desktop & IoT'],
  deliverySteps: ['Discover', 'Design', 'Build', 'Deploy'],
};

export const services: Service[] = [
  {
    title: 'Website',
    slug: 'web',
    short: 'Website cepat, modern, dan dioptimalkan untuk konversi bisnis Anda.',
    description:
      'Kami membangun website dari landing page sederhana hingga platform web kompleks. Setiap project dikerjakan dengan fokus pada performa, SEO, dan user experience yang konversi.',
    highlights: [
      'Desain responsif untuk semua perangkat',
      'Optimasi SEO dan kecepatan halaman',
      'CMS untuk kelola konten mandiri',
      'Integrasi WhatsApp, Maps, dan payment',
    ],
    ctaLabel: 'Lihat Paket Website',
  },
  {
    title: 'Aplikasi Mobile',
    slug: 'aplikasi',
    short: 'Aplikasi Android & iOS dengan UX intuitif dan backend yang skalabel.',
    description:
      'Dari MVP hingga aplikasi bisnis dengan modul kompleks. Kami fokus pada pengalaman pengguna yang nyaman, arsitektur backend yang rapi, dan build yang siap rilis ke Play Store & App Store.',
    highlights: [
      'Desain UI/UX yang intuitif dan modern',
      'Backend terintegrasi dan scalable',
      'Support Android & iOS',
      'Push notification dan fitur real-time',
    ],
    ctaLabel: 'Lihat Paket Aplikasi',
  },
  {
    title: 'Desktop App',
    slug: 'desktop',
    short: 'Aplikasi desktop offline/online untuk efisiensi operasional internal bisnis.',
    description:
      'Solusi perangkat lunak desktop untuk tools internal, sistem manajemen, atau aplikasi bisnis yang membutuhkan performa dan keamanan data tinggi di environment lokal maupun jaringan.',
    highlights: [
      'Single & multi-user dengan role management',
      'Database lokal atau sync online',
      'Cross-platform: Windows, Linux, macOS',
      'Integrasi printer dan hardware',
    ],
    ctaLabel: 'Lihat Paket Desktop',
  },
  {
    title: 'Games',
    slug: 'games',
    short: 'Pengembangan game dari prototype sederhana hingga game playable yang lengkap.',
    description:
      'Kami kembangkan game 2D/3D dari konsep hingga release — mulai dari game edukasi, casual game, hingga indie game dengan gameplay yang engaging dan visual yang menarik.',
    highlights: [
      'Gameplay mechanics yang solid',
      'UI/UX game yang intuitif',
      'Custom assets dan animasi',
      'Sound effect dan background music',
    ],
    ctaLabel: 'Lihat Paket Games',
  },
  {
    title: 'IoT & Otomasi',
    slug: 'iot',
    short: 'Sistem IoT custom dari prototype perangkat hingga dashboard monitoring real-time.',
    description:
      'Kami bantu dari discovery kebutuhan, perancangan arsitektur, hingga deployment sistem IoT yang terintegrasi dengan dashboard digital. Cocok untuk monitoring, otomasi industri, dan smart environment.',
    highlights: [
      'Prototype perangkat & sensor custom',
      'Dashboard monitoring real-time',
      'Integrasi cloud dan sistem yang ada',
      'Support purna implementasi',
    ],
    ctaLabel: 'Konsultasi IoT',
  },
];

export const servicesSection = {
  eyebrow: 'Layanan',
  title: '5 Solusi Digital dalam Satu Studio',
  description:
    'Website, aplikasi, desktop, games, hingga IoT — semua dikerjakan oleh tim berpengalaman dengan alur kerja yang terstruktur dan hasil yang terukur.',
  highlight: 'Konsultasi gratis untuk semua layanan. Hubungi kami sekarang.',
};

export const packagesGrouped: PackageGroup[] = [
  {
    id: 'web',
    label: 'Website',
    description: 'Paket website profesional dari profil bisnis hingga platform e-commerce dan web app.',
    packages: [
      {
        name: 'Starter',
        subtitle: 'Tampil profesional online dengan website yang rapi dan informatif.',
        priceFrom: 'Rp 750 rb',
        features: [
          'Landing page atau business profile',
          'Desain responsif semua perangkat',
          '1-5 section/halaman custom',
          'Blog integration',
          'CTA WhatsApp & Google Maps',
          'Basic SEO & SSL',
        ],
        serviceLabel: 'Website',
        ctaLabel: 'Konsultasi Sekarang',
      },
      {
        name: 'Business',
        subtitle: 'Website lengkap dengan fitur e-commerce atau portal untuk kebutuhan bisnis aktif.',
        priceFrom: 'Rp 2,5 jt',
        features: [
          'Portal berita / e-commerce storefront',
          'Full CMS Admin Panel',
          'Struktur SEO optimal',
          'Manajemen produk & pesanan',
          'Notifikasi & integrasi WhatsApp',
          'Training penggunaan CMS',
        ],
        serviceLabel: 'Website',
        ctaLabel: 'Konsultasi Sekarang',
        highlight: true,
      },
      {
        name: 'Enterprise',
        subtitle: 'Platform web custom dengan sistem kompleks, multi-role, dan API terintegrasi.',
        priceFrom: 'Rp 5 jt',
        features: [
          'Custom web application / SaaS platform',
          'LMS (Learning Management System)',
          'Multi-role user management',
          'Integrasi API & sistem eksternal',
          'High security & dedicated system',
          'Dashboard analitik bisnis',
        ],
        serviceLabel: 'Website',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
  {
    id: 'app',
    label: 'Mobile App',
    description: 'Paket aplikasi mobile Android & iOS dengan UI modern dan backend yang skalabel.',
    packages: [
      {
        name: 'Starter',
        subtitle: 'Validasi ide Anda dengan MVP yang rapi dan siap diuji ke pengguna nyata.',
        priceFrom: 'Rp 2 jt',
        features: [
          '1-3 fitur utama aplikasi',
          'UI/UX clean & profesional',
          'Login & registrasi pengguna',
          'Dummy data untuk presentasi',
          'Build Android (APK)',
          'Bugfix minor pasca-delivery',
        ],
        serviceLabel: 'Aplikasi Mobile',
        ctaLabel: 'Konsultasi Sekarang',
      },
      {
        name: 'Business',
        subtitle: 'Aplikasi bisnis siap operasional dengan fitur lengkap untuk pertumbuhan.',
        priceFrom: 'Rp 5 jt',
        features: [
          '3-6 fitur utama lengkap',
          'Backend & database terintegrasi',
          'Login + multi-user management',
          'Integrasi payment gateway',
          'Push notification',
          'Admin panel (web)',
          'Build Android + iOS opsional',
        ],
        serviceLabel: 'Aplikasi Mobile',
        ctaLabel: 'Konsultasi Sekarang',
        highlight: true,
      },
      {
        name: 'Enterprise',
        subtitle: 'Solusi skala penuh untuk bisnis yang butuh sistem kompleks dan skalabel.',
        priceFrom: 'Rp 10 jt',
        features: [
          'Sistem custom sesuai kebutuhan',
          'Backend advanced dengan API',
          'Multi-role: Admin, Owner, User',
          'Dashboard & analytics bisnis',
          'Integrasi API kompleks',
          'Keamanan & performa tinggi',
          'Skalabel (Cloud/VPS)',
        ],
        serviceLabel: 'Aplikasi Mobile',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
  {
    id: 'desktop',
    label: 'Desktop App',
    description: 'Aplikasi desktop untuk kebutuhan operasional bisnis, tools internal, dan sistem manajemen.',
    packages: [
      {
        name: 'Basic',
        subtitle: 'Solusi sederhana untuk tools internal atau aplikasi bisnis single-user.',
        priceFrom: 'Rp 2 jt',
        features: [
          'Database lokal / offline',
          'Single-user access',
          '1-2 fitur utama (CRUD data)',
          'Platform Windows',
          'Integrasi printer',
        ],
        serviceLabel: 'Desktop App',
        ctaLabel: 'Konsultasi Sekarang',
      },
      {
        name: 'Standard',
        subtitle: 'Aplikasi desktop multi-user dengan sinkronisasi data dan fitur lebih lengkap.',
        priceFrom: 'Rp 4 jt',
        features: [
          'Offline-online data sync',
          'Multi-user & role management',
          '3-5 fitur utama',
          'Cross-platform (Windows & Linux/macOS)',
          'Export & import data',
        ],
        serviceLabel: 'Desktop App',
        ctaLabel: 'Konsultasi Sekarang',
        highlight: true,
      },
      {
        name: 'Advanced',
        subtitle: 'Sistem desktop kompleks dengan integrasi hardware dan analitik data.',
        priceFrom: 'Rp 8 jt',
        features: [
          'Modul lebih banyak & kompleks',
          'Integrasi API / sistem eksternal',
          'Dashboard analitik data',
          'Integrasi hardware & perangkat',
          'Keamanan data tingkat tinggi',
        ],
        serviceLabel: 'Desktop App',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
  {
    id: 'games',
    label: 'Games',
    description: 'Pengembangan game dari prototype sederhana hingga game playable yang lengkap dan publishable.',
    packages: [
      {
        name: 'Starter',
        subtitle: 'Game prototype untuk validasi konsep atau proyek akademis.',
        priceFrom: 'Rp 1 jt',
        features: [
          'Prototype / simple game',
          'Gameplay dasar (movement, interaction)',
          '1 level sederhana',
          'UI basic (start, pause, game over)',
          'Free assets',
        ],
        serviceLabel: 'Games',
        ctaLabel: 'Konsultasi Sekarang',
      },
      {
        name: 'Pro',
        subtitle: 'Game playable dengan fitur lengkap, level bertahap, dan aset berkualitas.',
        priceFrom: 'Rp 3 jt',
        features: [
          'Semua fitur Starter +',
          'Custom gameplay mechanics',
          '2-3 level dengan variasi',
          'Inventory & item system',
          'Score system',
          'Premium assets & sound effect',
          'Basic animation (idle, walk, dll)',
        ],
        serviceLabel: 'Games',
        ctaLabel: 'Konsultasi Sekarang',
        highlight: true,
      },
      {
        name: 'Premium',
        subtitle: 'Game lengkap dengan AI, sistem penyimpanan, dan pengalaman bermain imersif.',
        priceFrom: 'Rp 5 jt',
        features: [
          'Semua fitur Pro +',
          'AI sederhana (enemy behavior)',
          'Save & load system',
          'Efek visual & polish',
          'Optimasi performa',
        ],
        serviceLabel: 'Games',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
  {
    id: 'iot',
    label: 'IoT',
    description: 'Solusi IoT custom dari discovery kebutuhan hingga deployment sistem yang terintegrasi penuh.',
    packages: [
      {
        name: 'IoT Custom',
        subtitle: 'Dirancang sepenuhnya sesuai kebutuhan spesifik bisnis atau industri Anda.',
        priceFrom: 'Rp 3 jt+',
        features: [
          'Discovery kebutuhan & arsitektur sistem',
          'Prototype perangkat + sensor',
          'Dashboard monitoring real-time',
          'Implementasi sesuai scope yang disepakati',
          'Integrasi cloud & sistem yang ada',
          'Support purna implementasi',
        ],
        serviceLabel: 'IoT',
        ctaLabel: 'Konsultasi Sekarang',
      },
    ],
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Berapa lama waktu pengerjaan proyek?',
    answer:
      'Tergantung scope. Landing page bisa 1-3 minggu, aplikasi mobile dan web app biasanya 4-12 minggu setelah dokumen kebutuhan disepakati. Kami selalu transparan soal timeline sejak awal.',
  },
  {
    question: 'Apakah ada garansi setelah proyek selesai?',
    answer:
      'Ada. Setiap paket dilengkapi periode garansi bugfix. Setelah masa garansi, dapat dilanjutkan dengan paket maintenance berkala sesuai kebutuhan.',
  },
  {
    question: 'Berapa kali bisa revisi?',
    answer:
      'Revisi dilakukan per milestone yang sudah disepakati. Kami menjaga ruang revisi yang wajar agar kualitas terjaga dan timeline tetap realistis.',
  },
  {
    question: 'Apakah bisa request maintenance bulanan?',
    answer:
      'Bisa. Tersedia paket maintenance bulanan yang mencakup monitoring, update konten, optimasi, dan penanganan bug kecil sesuai kebutuhan.',
  },
  {
    question: 'Bagaimana sistem pembayaran proyeknya?',
    answer:
      'Pembayaran dilakukan secara bertahap sesuai milestone. Detail skema pembayaran akan disepakati bersama di awal kontrak.',
  },
  {
    question: 'Apakah bisa integrasi dengan sistem yang sudah ada?',
    answer:
      'Bisa. Kami evaluasi sistem yang ada, kemudian menyusun rencana integrasi yang aman dan efisien sebelum pengerjaan dimulai.',
  },
  {
    question: 'Apakah melayani klien dari luar Makassar?',
    answer:
      'Tentu. Kami melayani klien dari seluruh Indonesia secara remote dengan komunikasi yang terstruktur melalui WhatsApp, Zoom, atau platform pilihan Anda.',
  },
];

export const portfolio: PortfolioItem[] = [
  {
    title: 'Penerbit Subaltern',
    category: 'E-Commerce',
    image: '/portfolio/Subaltern.png',
    description: 'Website penerbit dengan marketplace buku terintegrasi.',
    href: 'https://penerbitsubaltern.com',
  },
  {
    title: 'Dengarinfo',
    category: 'Portal Berita',
    image: '/portfolio/Dengarinfo.png',
    description: 'Portal berita digital dengan sistem kategori dan manajemen konten.',
    href: 'https://dengarinfo.com',
  },
  {
    title: 'Gasingapp',
    category: 'Mobile App',
    image: '/portfolio/gasingapp.png',
    description: 'Aplikasi multi-fungsi: sosial media + toko e-book terintegrasi.',
    href: 'https://play.google.com/store/apps/details?id=com.makassartechno.kurir',
  },
  {
    title: 'PD IPM Kota Makassar',
    category: 'Company Profile',
    image: '/portfolio/ipmmakassar.png',
    description: 'Website organisasi dengan sistem berita dan workspace anggota.',
    href: 'https://ipmmakassar.site',
  },
  {
    title: 'Smart Cane',
    category: 'IoT Prototype',
    image: '/portfolio/smartcane.png',
    description: 'Tongkat pintar navigasi tunanetra dengan deteksi objek & GPS tracking.',
    href: 'https://makassartechno.com',
  },
  {
    title: 'Kelurahan Wundudopi',
    category: 'E-Government',
    image: '/portfolio/wundudopi.png',
    description: 'Sistem administrasi kelurahan digital berbasis web.',
    href: 'https://kelurahanwundudopi.com/',
  },
];

export const portfolioBlurDataURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==';

export const contact = {
  address: 'Makassar, Sulawesi Selatan',
  email: 'makassartechno2025@gmail.com',
  phone: '082292725733',
  whatsapp: '082292725733',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/makassartechno', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61585930560134', icon: 'facebook' },
    { label: 'WhatsApp', href: 'https://wa.me/6282292725733', icon: 'whatsapp' },
  ] as SocialLink[],
};

export const contactSection = {
  title: 'Siap memulai proyek digital Anda?',
  description:
    'Ceritakan kebutuhan Anda. Kami akan bantu dari perencanaan, eksekusi, hingga deployment — tanpa ribet.',
  channelTitle: 'Hubungi Kami',
  channelDescription: 'Pilih kanal yang paling nyaman untuk diskusi awal.',
  hoursLabel: 'Jam Operasional',
  hoursValue: 'Senin – Sabtu, 09.00 – 18.00 WITA',
};

export const servicePageHighlights = [
  {
    title: 'Timeline realistis',
    description: 'Jadwal rapi dengan milestone yang disepakati bersama.',
  },
  {
    title: 'Quality gate',
    description: 'Review kualitas di setiap tahap sebelum lanjut ke berikutnya.',
  },
  {
    title: 'Support fleksibel',
    description: 'Maintenance opsional sesuai kebutuhan bisnis.',
  },
];
