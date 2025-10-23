import { MetadataRoute } from 'next';

// İstanbul ilçeleri listesi
const districts = [
  'adalar', 'avcılar', 'bahçelievler', 'bakırköy', 'başakşehir',
  'bayrampaşa', 'beşiktaş', 'beykoz', 'beyoğlu', 'büyükçekmece',
  'çatalca', 'çekmeköy', 'esenler', 'esenyurt', 'eyüpsultan',
  'fatih', 'gaziosmanpaşa', 'güngören', 'kadıköy', 'kağıthane',
  'kartal', 'kastamonu', 'kucaeli', 'küçükçekmece', 'maltepe',
  'pendik', 'sarıyer', 'şile', 'şişli', 'taksim',
  'tuzla', 'ümraniye', 'üsküdar', 'zeytinburnu'
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
  const baseUrl = 'https://atalayservis.com';

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
      url: `${baseUrl}/hizmetler/ocak-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/izgara-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/fritoz-servisi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hizmetler/kuzine-servisi`,
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

