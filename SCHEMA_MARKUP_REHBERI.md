# 📋 Schema Markup (Yapılandırılmış Veri) Rehberi

## 🎯 Schema Markup Nedir?

**Schema Markup**, Google'a ve diğer arama motorlarına web sayfanızın içeriğini daha iyi anlaması için verdiğiniz yapılandırılmış veri kodudur.

### Basit Örnek:
```
Normal HTML:
<p>Atalay Servis - İstanbul'da ocak servisi</p>

Schema Markup ile:
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Atalay Servis",
  "description": "İstanbul'da endüstriyel mutfak ekipmanları servis",
  "telephone": "+902125671560"
}
```

Google, ikinci versiyonu daha iyi anlıyor!

---

## 🏢 LocalBusiness Schema Nedir?

**LocalBusiness**, yerel işletmeler için kullanılan schema türüdür.

### Atalay Servis için Gerekli Bilgiler:
- ✅ İşletme adı
- ✅ Telefon numarası
- ✅ Adres
- ✅ Açılış saatleri
- ✅ Hizmet alanı (İstanbul)
- ✅ Hizmet türü
- ✅ Logo
- ✅ Sosyal medya profilleri

### Faydaları:
- ✅ Google Harita'da daha iyi görünüm
- ✅ "Local Pack" (3 işletme) sonuçlarında çıkma şansı
- ✅ Yıldız rating gösterimi
- ✅ Telefon numarası doğrudan gösterilir
- ✅ Açılış saatleri gösterilir

---

## 🔧 Service Schema Nedir?

**Service**, sunulan hizmetleri tanımlamak için kullanılan schema türüdür.

### Atalay Servis için Hizmetler:
1. **Ocak Servisi**
   - Açıklama
   - Fiyat aralığı
   - Hizmet alanı

2. **Izgara Servisi**
   - Açıklama
   - Fiyat aralığı
   - Hizmet alanı

3. **Fritöz Servisi**
   - Açıklama
   - Fiyat aralığı
   - Hizmet alanı

4. **Kuzine Servisi**
   - Açıklama
   - Fiyat aralığı
   - Hizmet alanı

### Faydaları:
- ✅ Hizmetler Google'da daha iyi görünür
- ✅ "Service" arama sonuçlarında çıkma
- ✅ Hizmet detayları gösterilir
- ✅ Fiyat bilgisi gösterilir

---

## 📝 JSON-LD Format Nedir?

**JSON-LD** (JSON for Linking Data), schema markup yazmanın en kolay yöntemidir.

### Avantajları:
- ✅ HTML'den ayrı yazılır
- ✅ Okunması kolay
- ✅ Bakımı kolay
- ✅ Google tarafından önerilir

### Yazım Yeri:
```html
<head>
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      ...
    }
  </script>
</head>
```

---

## 🚀 Atalay Servis için Schema Markup Örneği

### 1. LocalBusiness Schema (Ana Sayfa)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Atalay Servis",
  "image": "https://atalayservis.com/atalay-logo.png",
  "description": "İstanbul'da endüstriyel mutfak ekipmanları profesyonel servis hizmetleri",
  "telephone": "+902125671560",
  "email": "info@atalayservis.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "İstanbul",
    "addressLocality": "İstanbul",
    "addressCountry": "TR"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/atalayservis",
    "https://www.instagram.com/atalayservis"
  ]
}
```

### 2. Service Schema (Hizmet Sayfaları)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Ocak Servisi",
  "description": "Profesyonel ocak tamircisi ve bakım hizmetleri",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Atalay Servis"
  },
  "areaServed": {
    "@type": "City",
    "name": "İstanbul"
  },
  "priceRange": "₺₺",
  "serviceType": "Repair"
}
```

### 3. Organization Schema (Tüm Sayfalar)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Atalay Servis",
  "url": "https://atalayservis.com",
  "logo": "https://atalayservis.com/atalay-logo.png",
  "description": "İstanbul'da endüstriyel mutfak ekipmanları profesyonel servis",
  "telephone": "+902125671560",
  "email": "info@atalayservis.com",
  "sameAs": [
    "https://www.facebook.com/atalayservis",
    "https://www.instagram.com/atalayservis"
  ]
}
```

---

## ✅ Schema Markup Nasıl Eklenir?

### Next.js'de Ekleme Yöntemi:

**1. Layout.tsx'e ekle:**
```tsx
export default function RootLayout() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Atalay Servis",
    // ... diğer bilgiler
  };

  return (
    <html>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

**2. Sayfa bazında ekle:**
```tsx
export default function ServicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ocak Servisi",
    // ... diğer bilgiler
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {/* Sayfa içeriği */}
    </>
  );
}
```

---

## 🔍 Schema Markup Nasıl Test Edilir?

### 1. Google Rich Results Test
- URL: https://search.google.com/test/rich-results
- Sayfanızın URL'sini yapıştırın
- "Test URL" butonuna tıklayın
- Sonuçları kontrol edin

### 2. Schema.org Validator
- URL: https://validator.schema.org/
- HTML kodunuzu yapıştırın
- Hataları kontrol edin

### 3. Google Search Console
- Google Search Console'a girin
- "Enhancement" bölümüne bakın
- Hataları düzeltin

---

## 📊 Schema Markup'ın SEO Faydaları

| Fayda | Açıklama |
|-------|----------|
| **Rich Snippets** | Arama sonuçlarında daha fazla bilgi gösterilir |
| **Local Pack** | Google Harita sonuçlarında çıkma şansı |
| **Voice Search** | Sesli aramalarda daha iyi sonuç |
| **Featured Snippets** | "Sıfırıncı" konumda çıkma şansı |
| **CTR Artışı** | Daha fazla bilgi = daha fazla tıklama |
| **Ranking** | Google'ın sayfayı daha iyi anlaması |

---

## 🎯 Atalay Servis için Yapılacaklar

### Hemen Yapılacak:
1. ✅ LocalBusiness schema ekle (layout.tsx)
2. ✅ Organization schema ekle (layout.tsx)
3. ✅ Service schema ekle (hizmet sayfaları)
4. ✅ Google Rich Results Test ile test et
5. ✅ Google Search Console'a ekle

### Sonra Yapılacak:
1. ⏳ AggregateRating schema (müşteri yorumları)
2. ⏳ BreadcrumbList schema (breadcrumb navigation)
3. ⏳ FAQPage schema (SSS sayfası)

---

## 💡 Önemli Notlar

- ✅ Schema markup, sıralamayı doğrudan etkilemez
- ✅ Ama arama sonuçlarında daha iyi görünüm sağlar
- ✅ CTR (Click-Through Rate) artırır
- ✅ Google'ın sayfayı daha iyi anlamasını sağlar
- ✅ Doğru ve güncel bilgiler içermesi gerekir

---

## 📚 Kaynaklar

- Schema.org: https://schema.org
- Google Structured Data: https://developers.google.com/search/docs/appearance/structured-data
- JSON-LD: https://json-ld.org

