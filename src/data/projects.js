export const projects = [
  {
    id: "aml-monitoring",
    title: "AML Monitoring System",
    role: "Fullstack Developer",
    company: "TransferKu",
    description: "Sistem monitoring transaksi fullstack untuk kebutuhan Anti-Money Laundering, fraud prevention, pencegahan pendanaan terorisme, dan risiko terkait senjata pemusnah massal.",
    problem: "Perusahaan membutuhkan sistem untuk memonitor transaksi, melakukan screening sender dan beneficiary, mengklasifikasikan transaksi mencurigakan, serta menyediakan workflow review dan export laporan.",
    solution: "Membangun dashboard monitoring transaksi dengan screening terhadap sanction list internasional, AML engine untuk klasifikasi transaksi, alert detail, review kasus, dan export laporan yang terintegrasi dengan payment gateway TransferKu.",
    techStack: ["Laravel", "React", "Tailwind CSS", "MySQL", "REST API", "JavaScript"],
    features: [
      "Dashboard monitoring transaksi",
      "Screening sender dan beneficiary menggunakan international sanction list",
      "AML Engine untuk klasifikasi transaksi mencurigakan",
      "Alert detail dan review kasus",
      "Export laporan",
      "Integrasi dengan payment gateway TransferKu"
    ],
    highlights: [
      "Integrasi API untuk menerima dan memproses transaksi",
      "Screening transaksi terhadap sanction list internasional",
      "Dashboard real-time alerts untuk monitoring",
      "Workflow review dan export laporan untuk compliance",
      "Pemisahan frontend React dan backend Laravel untuk skalabilitas"
    ],
    results: [
      "Mendukung proses monitoring transaksi yang lebih terstruktur",
      "Membantu identifikasi transaksi yang perlu ditinjau lebih lanjut",
      "Menyediakan dashboard dan detail alert untuk mempercepat proses analisis"
    ],
    image: "/assets/images/dasbor-aml.png",
    screenshots: [
      { src: "/assets/images/login-aml.png", alt: "Login AML Monitoring System" },
      { src: "/assets/images/dasbor-aml.png", alt: "Dashboard AML Monitoring System" },
      { src: "/assets/images/detail-aml.png", alt: "Detail Alert AML Monitoring" }
    ],
    demoUrl: "https://aml-dash.transferku.id/",
    repoUrl: "Private",
    featured: true
  },
  {
    id: "transferku",
    title: "TransferKu",
    role: "Software Engineer / Web Developer",
    company: "TransferKu",
    description: "Sistem remitansi digital untuk transfer internasional dan domestik dengan dukungan transaksi B2B, B2C, C2B, dan C2C.",
    problem: "Dibutuhkan sistem dashboard dan integrasi API untuk mendukung proses transaksi remitansi digital sesuai kebutuhan bisnis.",
    solution: "Mengembangkan fitur backend dan dashboard, integrasi API untuk kebutuhan transaksi, validasi dan monitoring data transaksi, serta dukungan workflow bisnis remitansi digital.",
    techStack: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "jQuery", "REST API"],
    features: [
      "Dashboard transaksi",
      "Dukungan transaksi internasional dan domestik",
      "Dukungan model transaksi B2B, B2C, C2B, dan C2C",
      "Integrasi API",
      "Pengelolaan data transaksi"
    ],
    highlights: [
      "Pengembangan fitur backend dan dashboard",
      "Integrasi API untuk kebutuhan transaksi",
      "Validasi dan monitoring data transaksi",
      "Dukungan workflow bisnis remitansi digital"
    ],
    results: [
      "Mendukung operasional sistem remitansi digital",
      "Membantu pengembangan fitur untuk pengelolaan transaksi dan integrasi sistem"
    ],
    image: "/assets/images/dasbor-transferku.png",
    screenshots: [
      { src: "/assets/images/login-transferku.png", alt: "Login TransferKu Dashboard" },
      { src: "/assets/images/dasbor-transferku.png", alt: "Dashboard TransferKu" }
    ],
    demoUrl: "https://dashboard.transferku.id/",
    repoUrl: "Private",
    featured: true
  },
  {
    id: "ai-accounting",
    title: "AI-Powered Accounting Journal",
    role: "Fullstack Developer",
    company: "Personal Project",
    description: "Sistem penjurnalan akuntansi terintegrasi AI yang membantu pengguna non-akuntan mencatat transaksi menggunakan bahasa natural, kemudian mengolahnya menjadi jurnal hingga laporan neraca saldo.",
    problem: "Pengguna yang tidak memiliki latar belakang akuntansi kesulitan dalam proses pencatatan transaksi debit dan kredit secara manual.",
    solution: "Membangun sistem yang menerima input transaksi dalam bahasa natural, kemudian menggunakan AI untuk menerjemahkannya menjadi pencatatan akuntansi otomatis, dari jurnal umum hingga neraca saldo.",
    techStack: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "AI / LLaMA 4"],
    features: [
      "Input transaksi menggunakan bahasa natural",
      "Bantuan AI untuk memahami transaksi dan menyusun jurnal",
      "Jurnal umum",
      "Chart of Account",
      "Saldo awal",
      "Buku besar",
      "Neraca saldo",
      "Aset tetap dan penyusutan"
    ],
    highlights: [
      "Integrasi AI untuk menerjemahkan deskripsi transaksi menjadi pencatatan akuntansi",
      "Alur akuntansi dari input transaksi sampai laporan dasar",
      "Antarmuka yang disusun agar pengguna non-akuntan dapat memahami proses pencatatan"
    ],
    results: [
      "Membantu menyederhanakan proses penjurnalan akuntansi",
      "Mengurangi hambatan pengguna non-akuntan dalam memahami pencatatan debit dan kredit",
      "Menjadi contoh penerapan AI pada domain akuntansi praktis"
    ],
    image: "/assets/images/landingpage-akuntansi-nlp.png",
    screenshots: [
      { src: "/assets/images/landingpage-akuntansi-nlp.png", alt: "Landing Page AI-Powered Accounting Journal" },
      { src: "/assets/images/input-transaksi-akuntansi-nlp.png", alt: "Input transaksi bahasa natural" },
      { src: "/assets/images/jurnal-umum-akuntansi-nlp.png", alt: "Jurnal umum akuntansi NLP" }
    ],
    demoUrl: "https://ai-powered-accounting-journal.freedev.app/",
    repoUrl: "https://github.com/MoammarIqbal/AI-Powered-Accounting-Journal",
    featured: true
  },
  {
    id: "dokumentasi-transferku",
    title: "Dokumentasi TransferKu",
    role: "Frontend Developer / Documentation Developer",
    company: "TransferKu",
    description: "Web dokumentasi yang dikembangkan untuk membantu partner memahami proses integrasi API TransferKu ke sistem mereka.",
    problem: "Partner membutuhkan dokumentasi teknis yang rapi dan mudah diakses agar proses onboarding dan integrasi dapat berjalan lebih jelas.",
    solution: "Membangun web dokumentasi berbasis React dengan struktur navigasi teknis, panduan integrasi API, panduan dashboard, dan registration steps untuk kebutuhan partner.",
    techStack: ["React", "Tailwind CSS"],
    features: [
      "Halaman dokumentasi developer",
      "Panduan integrasi API",
      "Panduan dashboard",
      "Struktur dokumentasi untuk registration steps dan integrasi partner"
    ],
    highlights: [
      "Pengembangan web dokumentasi berbasis React",
      "Penyusunan struktur dokumentasi untuk kebutuhan partner",
      "Tampilan dokumentasi yang mendukung navigasi teknis dan pencarian informasi"
    ],
    results: [
      "Membantu partner memahami alur integrasi API TransferKu",
      "Menyediakan referensi teknis yang lebih terstruktur dan mudah dibagikan"
    ],
    image: "/assets/images/home-docs.png",
    screenshots: [
      { src: "/assets/images/home-docs.png", alt: "Home Dokumentasi TransferKu" },
      { src: "/assets/images/registration-step-docs.png", alt: "Registration Steps Dokumentasi TransferKu" }
    ],
    demoUrl: "https://docs.transferku.id/",
    repoUrl: "Private",
    featured: false
  },
  {
    id: "arsip-surat",
    title: "Sistem Arsip Surat",
    role: "Fullstack Developer",
    company: "TransferKu",
    description: "Aplikasi web untuk penyimpanan dan pengelolaan surat di PT. Graha Remitansi Indonesia (TransferKu) dengan generate nomor surat otomatis.",
    problem: "Proses administrasi surat masih manual dan membutuhkan sistem yang lebih terstruktur untuk pengelolaan arsip internal.",
    solution: "Membangun sistem arsip internal untuk mengelola data surat, user, divisi, dan kode klasifikasi surat, dilengkapi generate nomor surat otomatis berdasarkan tahun, bulan, dan kode klasifikasi.",
    techStack: ["Laravel", "MySQL", "Tailwind CSS", "Blade"],
    features: [
      "Dashboard arsip surat",
      "Manajemen surat",
      "Manajemen user",
      "Manajemen divisi",
      "Manajemen kode klasifikasi",
      "Generate nomor surat otomatis"
    ],
    highlights: [
      "Implementasi generate nomor surat otomatis",
      "Pengelolaan data referensi seperti divisi dan kode klasifikasi",
      "CRUD surat dan pengaturan administrasi internal",
      "Antarmuka berbasis web untuk memudahkan akses operasional"
    ],
    results: [
      "Membantu penyimpanan surat perusahaan menjadi lebih terdokumentasi",
      "Mengurangi proses manual dalam pembuatan nomor surat",
      "Memudahkan pencarian dan pengelolaan arsip internal"
    ],
    image: "/assets/images/dasbor-arsip-surat.png",
    screenshots: [
      { src: "/assets/images/login-arsip-surat.png", alt: "Login Sistem Arsip Surat" },
      { src: "/assets/images/dasbor-arsip-surat.png", alt: "Dashboard Sistem Arsip Surat" },
      { src: "/assets/images/input-surat-arsip-surat.png", alt: "Input Surat Sistem Arsip Surat" }
    ],
    demoUrl: "https://transferku.id/tools/sistem-arsip-surat/public/",
    repoUrl: "Private",
    featured: false
  }
];
