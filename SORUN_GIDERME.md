# 🔧 Atalay Servis - Sorun Giderme Rehberi

## ❌ Proje Localde Çalışmıyor

### Sorun: "Eva Tours" veya Başka Proje Görünüyor

**Nedeni**: Başka bir Next.js projesi port 3000'de çalışıyor olabilir.

**Çözüm 1: Port 3000'de Çalışan Prosesi Bul ve Durdur**

```bash
# Port 3000'de çalışan prosesi bul
lsof -i :3000

# Prosesi durdur (PID'yi kullan)
kill -9 <PID>
```

**Çözüm 2: Farklı Port Kullan**

```bash
# Geliştirme sunucusunu farklı portta başlat
npm run dev -- -p 3001

# Tarayıcıda aç
# http://localhost:3001
```

**Çözüm 3: Cache Temizle ve Yeniden Başlat**

```bash
# Tüm cache'i temizle
rm -rf .next node_modules/.cache

# Geliştirme sunucusunu başlat
npm run dev
```

---

## ❌ Build Hatası

### Sorun: "npm run build" Başarısız

**Çözüm:**

```bash
# Cache temizle
rm -rf .next

# node_modules temizle
rm -rf node_modules package-lock.json

# Yeniden yükle
npm install

# Build et
npm run build
```

---

## ❌ TypeScript Hatası

### Sorun: "params is a Promise" Hatası

**Çözüm**: Dosyalar zaten düzeltilmiş. Eğer hala hata alıyorsanız:

```typescript
// ❌ Yanlış
export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
}

// ✅ Doğru
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
}
```

---

## ❌ Port Zaten Kullanımda

### Sorun: "Port 3000 already in use"

**Çözüm 1: Prosesi Bul ve Durdur**

```bash
# macOS/Linux
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Çözüm 2: Farklı Port Kullan**

```bash
npm run dev -- -p 3001
```

---

## ❌ Dependencies Sorunu

### Sorun: "Module not found" Hatası

**Çözüm:**

```bash
# node_modules temizle
rm -rf node_modules package-lock.json

# Yeniden yükle
npm install

# Sunucuyu başlat
npm run dev
```

---

## ❌ Sayfalar 404 Hatası Veriyor

### Sorun: Dinamik Sayfalar Çalışmıyor

**Çözüm:**

```bash
# Build et
npm run build

# Production sunucusunu başlat
npm start
```

---

## ✅ Başarılı Başlangıç Adımları

### 1. Proje Klasörüne Git
```bash
cd /Users/gokhan.yildirim/atalayservis
```

### 2. Dependencies Yükle
```bash
npm install
```

### 3. Geliştirme Sunucusunu Başlat
```bash
npm run dev
```

### 4. Tarayıcıda Aç
```
http://localhost:3000
```

### 5. Sayfaları Test Et
- Ana Sayfa: http://localhost:3000
- Hizmetler: http://localhost:3000/hizmetler
- Ocak Servisi: http://localhost:3000/hizmetler/ocak-servisi
- Beşiktaş: http://localhost:3000/servis/besiktas
- Blog: http://localhost:3000/blog
- İletişim: http://localhost:3000/iletisim

---

## 🔍 Kontrol Listesi

Proje çalışmıyorsa sırasıyla kontrol et:

- [ ] Doğru klasörde misin? `/Users/gokhan.yildirim/atalayservis`
- [ ] `npm install` çalıştırdın mı?
- [ ] Port 3000 boş mu? (`lsof -i :3000`)
- [ ] Node.js yüklü mü? (`node --version`)
- [ ] npm yüklü mü? (`npm --version`)
- [ ] `.next` klasörü temizledin mi? (`rm -rf .next`)
- [ ] `node_modules` temizledin mi? (`rm -rf node_modules`)

---

## 📊 Sistem Gereksinimleri

- **Node.js**: 18.0.0 veya üzeri
- **npm**: 9.0.0 veya üzeri
- **RAM**: En az 2GB
- **Disk**: En az 500MB

---

## 🔧 Komutlar Özeti

```bash
# Geliştirme sunucusu (hot reload)
npm run dev

# Production build
npm run build

# Production sunucusu
npm start

# Linting
npm run lint

# Cache temizle
rm -rf .next

# Tüm cache temizle
rm -rf .next node_modules/.cache

# node_modules temizle
rm -rf node_modules package-lock.json

# Yeniden yükle
npm install
```

---

## 📞 Hala Sorun Mu?

Eğer hala sorun yaşıyorsanız:

1. **Terminal çıktısını kontrol et** - Hata mesajını oku
2. **Google'da ara** - Hata mesajını Google'da ara
3. **Stack Overflow** - https://stackoverflow.com/questions/tagged/next.js
4. **Next.js Discord** - https://discord.gg/bUG7V3H

---

## ✨ İpuçları

1. **Geliştirme sırasında** `npm run dev` kullan (hot reload)
2. **Production'a göndermeden** `npm run build` ile test et
3. **Port sorunları için** farklı port kullan (`-p 3001`)
4. **Cache sorunları için** `.next` klasörünü sil
5. **Dependency sorunları için** `node_modules` temizle

---

*Son Güncelleme: 23 Ekim 2024*

