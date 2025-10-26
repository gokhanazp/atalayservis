import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Flame, Flame as Grill, Zap, ChefHat } from 'lucide-react';

// İstanbul ilçeleri - Yeni slug formatı (Türkçe karakterler kaldırıldı)
const districts = [
  { slug: 'adalar-atalay-servisi', name: 'Adalar' },
  { slug: 'arnavutkoy-atalay-servisi', name: 'Arnavutköy' },
  { slug: 'atashehir-atalay-servisi', name: 'Ataşehir' },
  { slug: 'avcilar-atalay-servisi', name: 'Avcılar' },
  { slug: 'bagcilar-atalay-servisi', name: 'Bağcılar' },
  { slug: 'bahcelievler-atalay-servisi', name: 'Bahçelievler' },
  { slug: 'bakirkoy-atalay-servisi', name: 'Bakırköy' },
  { slug: 'basaksehir-atalay-servisi', name: 'Başakşehir' },
  { slug: 'bayrampasa-atalay-servisi', name: 'Bayrampaşa' },
  { slug: 'besiktas-atalay-servisi', name: 'Beşiktaş' },
  { slug: 'beykoz-atalay-servisi', name: 'Beykoz' },
  { slug: 'beylikduzu-atalay-servisi', name: 'Beylikdüzü' },
  { slug: 'beyoglu-atalay-servisi', name: 'Beyoğlu' },
  { slug: 'buyukcekmece-atalay-servisi', name: 'Büyükçekmece' },
  { slug: 'catalca-atalay-servisi', name: 'Çatalca' },
  { slug: 'cekmekoy-atalay-servisi', name: 'Çekmeköy' },
  { slug: 'esenler-atalay-servisi', name: 'Esenler' },
  { slug: 'esenyurt-atalay-servisi', name: 'Esenyurt' },
  { slug: 'eyupsultan-atalay-servisi', name: 'Eyüpsultan' },
  { slug: 'fatih-atalay-servisi', name: 'Fatih' },
  { slug: 'gaziosmanpasa-atalay-servisi', name: 'Gaziosmanpaşa' },
  { slug: 'gungoren-atalay-servisi', name: 'Güngören' },
  { slug: 'kadikoy-atalay-servisi', name: 'Kadıköy' },
  { slug: 'kagithane-atalay-servisi', name: 'Kağıthane' },
  { slug: 'kartal-atalay-servisi', name: 'Kartal' },
  { slug: 'kucukcekmece-atalay-servisi', name: 'Küçükçekmece' },
  { slug: 'maltepe-atalay-servisi', name: 'Maltepe' },
  { slug: 'pendik-atalay-servisi', name: 'Pendik' },
  { slug: 'sariyer-atalay-servisi', name: 'Sarıyer' },
  { slug: 'sile-atalay-servisi', name: 'Şile' },
  { slug: 'silivri-atalay-servisi', name: 'Silivri' },
  { slug: 'sisli-atalay-servisi', name: 'Şişli' },
  { slug: 'sultangazi-atalay-servisi', name: 'Sultangazi' },
  { slug: 'taksim-atalay-servisi', name: 'Taksim' },
  { slug: 'tuzla-atalay-servisi', name: 'Tuzla' },
  { slug: 'umraniye-atalay-servisi', name: 'Ümraniye' },
  { slug: 'uskudar-atalay-servisi', name: 'Üsküdar' },
  { slug: 'zeytinburnu-atalay-servisi', name: 'Zeytinburnu' },
];

// İlçe adlarını düzeltme fonksiyonu
function formatDistrictName(slug: string): string {
  const district = districts.find(d => d.slug === slug);
  return district ? district.name : slug;
}

export async function generateMetadata({ params }: { params: Promise<{ district: string }> }): Promise<Metadata> {
  const { district } = await params;
  const districtName = formatDistrictName(district);

  return {
    title: `${districtName} Atalay Servis | Profesyonel Tamircisi Hizmetleri`,
    description: `${districtName}'de Atalay Servis - Profesyonel tamircisi hizmetleri. Ocak, ızgara, fritöz ve kuzine servisi. 24/7 acil servis. Hemen iletişime geçin!`,
  };
}

export async function generateStaticParams() {
  return districts.map((district) => ({
    district: district.slug,
  }));
}

export default async function DistrictService({ params }: { params: Promise<{ district: string }> }) {
  const { district } = await params;

  if (!districts.some(d => d.slug === district)) {
    notFound();
  }

  const districtName = formatDistrictName(district);

  // Service Schema for District
  const districtServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${districtName} Atalay Servis`,
    "description": `${districtName}'de Atalay Servis - Profesyonel tamircisi hizmetleri. Ocak, ızgara, fritöz ve kuzine servisi.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Atalay Servis",
      "telephone": "+905013001981",
      "url": "https://atalayservis.com"
    },
    "areaServed": {
      "@type": "City",
      "name": districtName
    },
    "priceRange": "₺₺",
    "serviceType": "Repair"
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }
        .hero-zoom {
          animation: zoomIn 3s ease-out forwards;
        }
      `}</style>

      {/* Schema Markup - District Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(districtServiceSchema) }}
      />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 hero-zoom opacity-20" style={{backgroundImage: 'url(/img/slider-05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{districtName} Atalay Servis - Profesyonel Tamircisi</h1>
          <p className="text-2xl mb-6 text-red-100">
            {districtName}'de Atalay Tamircisi Hizmetleri - Endüstriyel Mutfak Ekipmanları Servis
          </p>
          <p className="text-lg text-red-50 max-w-2xl">
            {districtName}'de Atalay Servis olarak, Atalay ocak, ızgara, fritöz ve kuzine ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanız. Profesyonel tamircisi ekibimiz 24/7 acil servis hizmetleri sunmaktadır.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{districtName}'de Atalay Servis Hizmetleri</h2>
          <p className="text-lg text-gray-600 mb-12">
            {districtName}'de Atalay Servis olarak, profesyonel tamircisi ekibimiz endüstriyel mutfak ekipmanlarının tüm servis ihtiyaçlarını karşılamaktadır. Atalay ocak servisi, ızgara servisi, fritöz servisi ve kuzine servisi hizmetleri sunuyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ocak Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">{districtName} Ocak Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay ocak tamircisi hizmetleri. Profesyonel bakım, onarım, temizlik ve teknik destek.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Atalay ocak tamircisi</li>
                <li>✓ Periyodik bakım ve onarım</li>
                <li>✓ 24/7 acil servis</li>
                <li>✓ Orijinal yedek parça</li>
              </ul>
              <Link href="/hizmetler/atalay-ocak-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Izgara Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Grill className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">{districtName} Izgara Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay ızgara tamircisi hizmetleri. Profesyonel temizlik, bakım, onarım ve hijyen.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Atalay ızgara tamircisi</li>
                <li>✓ Profesyonel temizlik</li>
                <li>✓ Bakım ve onarım hizmetleri</li>
                <li>✓ Orijinal yedek parça</li>
              </ul>
              <Link href="/hizmetler/atalay-izgara-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Fritöz Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">{districtName} Fritöz Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay fritöz tamircisi hizmetleri. Bakım, yağ değişimi, temizlik ve onarım.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Atalay fritöz tamircisi</li>
                <li>✓ Yağ değişimi ve filtreleme</li>
                <li>✓ Güvenlik kontrolleri</li>
                <li>✓ 24/7 acil servis</li>
              </ul>
              <Link href="/hizmetler/atalay-fritoz-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Kuzine Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">{districtName} Kuzine Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay kuzine tamircisi hizmetleri. Bakım, onarım ve teknik destek.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Atalay kuzine tamircisi</li>
                <li>✓ Tüm ekipman bakımı</li>
                <li>✓ Onarım ve iyileştirme</li>
                <li>✓ 24/7 profesyonel destek</li>
              </ul>
              <Link href="/hizmetler/atalay-kuzine-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">{districtName} Atalay Servis Hakkında</h2>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              <strong>{districtName} Atalay Servis</strong>, İstanbul'un {districtName} ilçesinde endüstriyel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanlaşmış bir şirkettir. Atalay ocak, ızgara, fritöz ve kuzine ekipmanlarının tüm servis ihtiyaçlarını profesyonel bir şekilde karşılıyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">{districtName}'de Atalay Ocak Servisi</h3>
            <p>
              {districtName}'de Atalay ocak servis hizmetleri, profesyonel tamircisi teknisyenleri tarafından sunulmaktadır. Atalay ocak tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm ocak modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz. Atalay ocak servisi kapsamında, ocakların temizliği, bakımı ve arızaların giderilmesi işlemleri yapılmaktadır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">{districtName}'de Atalay Izgara Servisi</h3>
            <p>
              {districtName}'de Atalay ızgara servisi hizmetleri, profesyonel tamircisi teknisyenleri tarafından sunulmaktadır. Atalay ızgara tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm ızgara modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz. Atalay ızgara servisi kapsamında, ızgaraların temizliği, bakımı ve arızaların giderilmesi işlemleri yapılmaktadır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">{districtName}'de Atalay Fritöz Servisi</h3>
            <p>
              {districtName}'de Atalay fritöz servisi hizmetleri, profesyonel tamircisi teknisyenleri tarafından sunulmaktadır. Atalay fritöz tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm fritöz modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz. Atalay fritöz servisi kapsamında, fritözlerin temizliği, yağ değişimi, bakımı ve arızaların giderilmesi işlemleri yapılmaktadır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">{districtName}'de Atalay Kuzine Servisi</h3>
            <p>
              {districtName}'de Atalay kuzine servisi hizmetleri, profesyonel tamircisi teknisyenleri tarafından sunulmaktadır. Atalay kuzine tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm kuzine modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz. Atalay kuzine servisi kapsamında, kuzinenin temizliği, bakımı ve arızaların giderilmesi işlemleri yapılmaktadır.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Neden {districtName}'de Atalay Servis?</h3>
            <ul className="list-disc list-inside space-y-3">
              <li><strong>Profesyonel Tamircisi Hizmetleri:</strong> Uzman teknisyenlerimiz tüm Atalay ürünlerinin bakım ve onarımında deneyimlidir.</li>
              <li><strong>24/7 Acil Servis:</strong> {districtName}'de acil durumlarda hemen müdahale edebiliriz.</li>
              <li><strong>Orijinal Yedek Parçalar:</strong> Tüm yedek parçalar %100 orijinal ve garantilidir.</li>
              <li><strong>Uygun Fiyatlandırma:</strong> Şeffaf ve rekabetçi fiyatlandırma politikası sunuyoruz.</li>
              <li><strong>Garantili Hizmet:</strong> Tüm işlerimize 6 ay garantisi veriyoruz.</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">{districtName}'de Atalay Servis İletişim</h3>
            <p>
              {districtName}'de Atalay Servis hizmetleri almak için bize telefon, e-mail veya WhatsApp üzerinden ulaşabilirsiniz. Profesyonel tamircisi ekibimiz, ekipmanlarınızın bakım ve onarımını güvenle yapabilir. Atalay ocak servis, ızgara servisi, fritöz servisi ve kuzine servisi hizmetleri için hemen iletişime geçin.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{districtName}'de Atalay Servis Hizmetleri Almak İstiyorsanız</h2>
          <p className="text-lg mb-6 text-red-100">Profesyonel tamircisi ekibimiz 24/7 hazır. Atalay Servis ile iletişime geçin!</p>
          <Link
            href="/iletisim"
            className="bg-white text-red-700 hover:bg-red-50 px-8 py-3 rounded-lg font-bold inline-block transition shadow-lg"
          >
            İletişim Formu
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

