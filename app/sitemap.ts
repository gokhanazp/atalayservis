import { MetadataRoute } from 'next';

// İstanbul ilçeleri listesi - URL-safe slug formatı (Türkçe karakterler kaldırıldı)
const districts = [
  'adalar-atalay-servisi',
  'arnavutkoy-atalay-servisi',
  'atashehir-atalay-servisi',
  'avcilar-atalay-servisi',
  'bagcilar-atalay-servisi',
  'bahcelievler-atalay-servisi',
  'bakirkoy-atalay-servisi',
  'basaksehir-atalay-servisi',
  'bayrampasa-atalay-servisi',
  'besiktas-atalay-servisi',
  'beykoz-atalay-servisi',
  'beylikduzu-atalay-servisi',
  'beyoglu-atalay-servisi',
  'buyukcekmece-atalay-servisi',
  'catalca-atalay-servisi',
  'cekmekoy-atalay-servisi',
  'esenler-atalay-servisi',
  'esenyurt-atalay-servisi',
  'eyupsultan-atalay-servisi',
  'fatih-atalay-servisi',
  'gaziosmanpasa-atalay-servisi',
  'gungoren-atalay-servisi',
  'kadikoy-atalay-servisi',
  'kagithane-atalay-servisi',
  'kartal-atalay-servisi',
  'kucukcekmece-atalay-servisi',
  'maltepe-atalay-servisi',
  'pendik-atalay-servisi',
  'sariyer-atalay-servisi',
  'sile-atalay-servisi',
  'silivri-atalay-servisi',
  'sisli-atalay-servisi',
  'sultangazi-atalay-servisi',
  'taksim-atalay-servisi',
  'tuzla-atalay-servisi',
  'umraniye-atalay-servisi',
  'uskudar-atalay-servisi',
  'zeytinburnu-atalay-servisi'
];

// Blog yazıları
const blogPosts = [
  'atalay-servis-profesyonel-tamircisi-hizmetleri',
  'atalay-ocak-servis-profesyonel-tamircisi',
  'atalay-izgara-servisi-profesyonel-tamircisi',
  'atalay-fritoz-servisi-profesyonel-tamircisi',
  'atalay-kuzine-servisi-profesyonel-tamircisi',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.atalayservisi.com';

  // Ana sayfalar
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hizmetler/atalay-ocak-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/atalay-izgara-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/atalay-fritoz-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/atalay-kuzine-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sss`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog yazıları
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // İlçe sayfaları
  const districtPages: MetadataRoute.Sitemap = districts.map((district) => ({
    url: `${baseUrl}/servis/${district}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...mainPages, ...blogPages, ...districtPages];
}

