# Atalay Servis - Kurulum ve Başlangıç Rehberi

## 🚀 Hızlı Başlangıç

### 1. Geliştirme Ortamında Çalıştırma

```bash
# Proje dizinine gir
cd /Users/gokhan.yildirim/atalayservis

# Geliştirme sunucusunu başlat
npm run dev

# Tarayıcıda aç
# http://localhost:3000
```

### 2. Production Build

```bash
# Build oluştur
npm run build

# Production sunucusunu başlat
npm start

# Tarayıcıda aç
# http://localhost:3000
```

## 📦 Proje Yapısı

```
atalayservis/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (SEO metadata)
│   ├── page.tsx                 # Ana sayfa
│   ├── sitemap.ts               # Dinamik sitemap
│   ├── globals.css              # Global CSS
│   ├── hizmetler/               # Hizmetler sayfaları
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── servis/                  # İlçe sayfaları
│   │   └── [district]/page.tsx
│   ├── blog/                    # Blog sayfası
│   │   └── page.tsx
│   └── iletisim/                # İletişim sayfası
│       └── page.tsx
├── public/                       # Statik dosyalar
│   ├── robots.txt               # Search engine rules
│   └── favicon.ico              # Site ikonu
├── next.config.ts               # Next.js konfigürasyonu
├── tsconfig.json                # TypeScript konfigürasyonu
├── tailwind.config.ts           # Tailwind CSS konfigürasyonu
└── package.json                 # Dependencies
```

## 🔧 Konfigürasyon

### 1. Domain Ayarı

`app/layout.tsx` ve `app/sitemap.ts` dosyalarında domain adresini güncelleyin:

```typescript
// Eski
url: "https://atalayservis.com"

// Yeni (kendi domain'iniz)
url: "https://yourdomain.com"
```

### 2. İletişim Bilgileri

`app/iletisim/page.tsx` dosyasında iletişim bilgilerini güncelleyin:

```typescript
// Telefon
<a href="tel:+902125671560">0212 567 15 60</a>

// E-mail
<a href="mailto:info@atalayservis.com">info@atalayservis.com</a>
```

### 3. Google Analytics

`app/layout.tsx` dosyasında Google Analytics kodunu ekleyin:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 🌐 Vercel'e Deployment

### 1. Vercel Hesabı Oluştur
- https://vercel.com adresine git
- GitHub hesabı ile giriş yap

### 2. Projeyi Bağla
```bash
# Vercel CLI'yi kur
npm install -g vercel

# Deployment yap
vercel
```

### 3. Domain Bağla
- Vercel dashboard'da Settings > Domains
- Kendi domain'ini ekle
- DNS ayarlarını güncelle

## 📝 İçerik Güncellemeleri

### Blog Yazısı Ekleme

`app/blog/page.tsx` dosyasında `posts` array'ine yeni yazı ekle:

```typescript
{
  id: 5,
  title: 'Yeni Blog Yazısı',
  excerpt: 'Yazı özeti...',
  date: '2024-01-20',
  category: 'Kategori',
}
```

### Hizmet Ekleme

`app/hizmetler/[slug]/page.tsx` dosyasında `services` object'ine yeni hizmet ekle:

```typescript
'yeni-hizmet': {
  title: 'Yeni Hizmet',
  description: 'Açıklama',
  keywords: 'anahtar kelimeler',
  content: 'İçerik...',
}
```

### İlçe Ekleme

`app/servis/[district]/page.tsx` dosyasında `districts` array'ine yeni ilçe ekle:

```typescript
const districts = [
  'adalar',
  'yeni-ilce',  // Yeni ilçe
  // ...
];
```

## 🔍 SEO Kontrol

### 1. Sitemap Kontrol
```bash
curl http://localhost:3000/sitemap.xml
```

### 2. Robots.txt Kontrol
```bash
curl http://localhost:3000/robots.txt
```

### 3. Meta Tags Kontrol
```bash
curl http://localhost:3000 | grep -o '<meta.*>'
```

## 🐛 Sorun Giderme

### Port 3000 Zaten Kullanımda
```bash
# Farklı port kullan
npm run dev -- -p 3001
```

### Build Hatası
```bash
# Cache temizle
rm -rf .next
npm run build
```

### Dependencies Sorunu
```bash
# node_modules temizle
rm -rf node_modules package-lock.json
npm install
```

## 📚 Faydalı Linkler

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://www.typescriptlang.org
- **Vercel Docs**: https://vercel.com/docs
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com

## 💡 İpuçları

1. **Geliştirme sırasında** `npm run dev` kullan (hot reload)
2. **Production'a göndermeden** `npm run build` ile test et
3. **SEO için** tüm sayfaların meta description'ı olduğundan emin ol
4. **Performans için** resimler optimize et
5. **Güvenlik için** sensitive bilgileri `.env` dosyasında sakla

## 📞 Destek

Sorularınız için:
- E-mail: info@atalayservis.com
- Telefon: 0212 567 15 60

