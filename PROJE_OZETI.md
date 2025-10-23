# Atalay Servis - Proje Özeti

## 🎯 Proje Hedefi
SEO odaklı, profesyonel bir hizmet sitesi oluşturmak. "Atalay Servis" anahtar kelimesi ve ilçe bazlı sayfalarla Google'da ilk sayfada çıkmayı hedeflemek.

## 🏗️ Teknik Altyapı

### Framework & Tools
- **Next.js 16** - React framework (App Router)
- **TypeScript** - Type safety
- **Tailwind CSS** - Responsive styling
- **Sharp** - Image optimization
- **next-sitemap** - Sitemap generation

### Deployment
- **Vercel** (önerilir - Next.js için optimize)
- CDN global
- Otomatik SSL
- Analytics

## 📁 Proje Yapısı

```
atalayservis/
├── app/
│   ├── layout.tsx              # Root layout (SEO metadata)
│   ├── page.tsx                # Ana sayfa
│   ├── sitemap.ts              # Dinamik sitemap
│   ├── globals.css             # Global styles
│   ├── hizmetler/
│   │   ├── page.tsx            # Hizmetler listesi
│   │   └── [slug]/
│   │       └── page.tsx        # Dinamik hizmet sayfaları
│   │           - ocak-servisi
│   │           - izgara-servisi
│   │           - fritoz-servisi
│   │           - kuzine-servisi
│   ├── servis/
│   │   └── [district]/
│   │       └── page.tsx        # Dinamik ilçe sayfaları (34 ilçe)
│   ├── blog/
│   │   └── page.tsx            # Blog sayfası
│   └── iletisim/
│       └── page.tsx            # İletişim formu
├── public/
│   └── robots.txt              # Search engine crawling rules
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🔍 SEO Optimizasyonları

### ✅ Yapılan Optimizasyonlar
1. **Metadata Management**
   - Title, description, keywords
   - Open Graph (Facebook, LinkedIn)
   - Twitter Card
   - Canonical URLs

2. **Sitemap & Robots**
   - `sitemap.ts` - Dinamik sitemap (tüm sayfalar)
   - `robots.txt` - Search engine crawling rules

3. **Structured Data**
   - Schema.org markup (LocalBusiness, Service)
   - JSON-LD format

4. **Performance**
   - Image optimization (WebP, AVIF)
   - Compression enabled
   - DNS prefetch
   - Preconnect to Google Fonts

5. **Mobile Optimization**
   - Responsive design (Tailwind CSS)
   - Mobile-first approach
   - Viewport meta tag

6. **Internal Linking**
   - Breadcrumb navigation
   - Strategic internal links
   - Anchor text optimization

## 📄 Sayfalar

### Ana Sayfalar
- **Ana Sayfa** (`/`) - Hero section, hizmetler, neden biz
- **Hizmetler** (`/hizmetler`) - Tüm hizmetlerin listesi
- **Blog** (`/blog`) - SEO için içerik
- **İletişim** (`/iletisim`) - İletişim formu
- **Hakkımızda** (eklenecek)
- **Referanslar** (eklenecek)

### Dinamik Sayfalar
- **Hizmet Detayları** (`/hizmetler/[slug]`)
  - Ocak Servisi
  - Izgara Servisi
  - Fritöz Servisi
  - Kuzine Servisi

- **İlçe Sayfaları** (`/servis/[district]`)
  - 34 İstanbul ilçesi için ayrı sayfalar
  - Her ilçe için lokalize içerik
  - Lokasyon bazlı SEO

## 🚀 Başlangıç Komutları

```bash
# Geliştirme sunucusu başlat
npm run dev

# Production build
npm run build

# Production sunucusu başlat
npm start

# Linting
npm run lint
```

## 📊 SEO Kontrol Listesi

- [x] Meta descriptions
- [x] Keywords
- [x] Open Graph tags
- [x] Twitter Card
- [x] Canonical URLs
- [x] Robots.txt
- [x] Sitemap.xml
- [x] Mobile responsive
- [x] Page speed optimization
- [x] Internal linking
- [ ] Google Analytics (eklenecek)
- [ ] Google Search Console (eklenecek)
- [ ] Structured data testing (eklenecek)

## 🔧 Sonraki Adımlar

1. **Google Analytics & Search Console**
   - GA4 entegrasyonu
   - Search Console verification

2. **Blog Sistemi**
   - Daha fazla blog yazısı
   - Backlink stratejisi

3. **İçerik Optimizasyonu**
   - Keyword research
   - Content expansion
   - Image alt text

4. **Teknik SEO**
   - Core Web Vitals optimization
   - Schema.org markup genişletme
   - Hreflang tags (çoklu dil için)

5. **Supabase Entegrasyonu**
   - İletişim formu backend
   - Blog yazıları yönetimi
   - Dinamik içerik

## 📞 İletişim Bilgileri

- **Telefon**: 0212 567 15 60
- **E-mail**: info@atalayservis.com
- **Adres**: Kasımpaşa, İstanbul

## 📝 Notlar

- Site Türkçe dilinde optimize edilmiştir
- Responsive design tüm cihazlarda çalışır
- Next.js 16 ile SSR ve SSG desteği
- Vercel'de deployment için hazır

