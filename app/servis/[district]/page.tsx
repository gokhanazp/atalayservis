import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

// İstanbul ilçeleri - Yeni slug formatı (Türkçe karakterler kaldırıldı)
const districts = [
  { slug: 'adalar-atalay-servisi', name: 'Adalar' },
  { slug: 'avcilar-atalay-servisi', name: 'Avcılar' },
  { slug: 'bahcelievler-atalay-servisi', name: 'Bahçelievler' },
  { slug: 'bakirkoy-atalay-servisi', name: 'Bakırköy' },
  { slug: 'basaksehir-atalay-servisi', name: 'Başakşehir' },
  { slug: 'bayrampasa-atalay-servisi', name: 'Bayrampaşa' },
  { slug: 'besiktas-atalay-servisi', name: 'Beşiktaş' },
  { slug: 'beykoz-atalay-servisi', name: 'Beykoz' },
  { slug: 'beyoglu-atalay-servisi', name: 'Beyoğlu' },
  { slug: 'buyukcekmece-atalay-servisi', name: 'Büyükçekmece' },
  { slug: 'catalca-atalay-servisi', name: 'Çatalca' },
  { slug: 'cekmekoy-atalay-servisi', name: 'Çekmeköy' },
  { slug: 'esenler-atalay-servisi', name: 'Esenler' },
  { slug: 'esenyurt-atalay-servisi', name: 'Esenyurt' },
  { slug: 'eyupsultan-atalay-servisi', name: 'Eyüpsultan' },
  { slug: 'fatih-atalay-servisi', name: 'Fatih' },
  { slug: 'gaziosmanpasa-atalay-servisi', name: 'Gaziosmanpaşa' }, // Gaziosmanpaşa (ş → s)
  { slug: 'gungoren-atalay-servisi', name: 'Güngören' },
  { slug: 'kadikoy-atalay-servisi', name: 'Kadıköy' },
  { slug: 'kagithane-atalay-servisi', name: 'Kağıthane' },
  { slug: 'kartal-atalay-servisi', name: 'Kartal' },
  { slug: 'kucaeli-atalay-servisi', name: 'Kucaeli' },
  { slug: 'kucukcekmece-atalay-servisi', name: 'Küçükçekmece' },
  { slug: 'maltepe-atalay-servisi', name: 'Maltepe' },
  { slug: 'pendik-atalay-servisi', name: 'Pendik' },
  { slug: 'sariyer-atalay-servisi', name: 'Sarıyer' },
  { slug: 'sile-atalay-servisi', name: 'Şile' },
  { slug: 'sisli-atalay-servisi', name: 'Şişli' },
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
    title: `${districtName} Servis | Atalay Servis`,
    description: `${districtName}'de endüstriyel mutfak ekipmanları servis hizmetleri. Ocak, ızgara, fritöz ve kuzine servisi.`,
    keywords: `${districtName} servis, ${districtName} ocak servisi, ${districtName} ızgara servisi, ${districtName} fritöz servisi`,
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

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">{districtName} Atalay Servis</h1>
          <p className="text-2xl mb-6 text-red-100">
            {districtName}'de Profesyonel Endüstriyel Mutfak Ekipmanları Servis Hizmetleri
          </p>
          <p className="text-lg text-red-50 max-w-2xl">
            Atalay ocak, ızgara, fritöz ve kuzine ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanız. 24/7 acil servis hizmetleri sunuyoruz.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{districtName}'de Sunduğumuz Hizmetler</h2>
          <p className="text-lg text-gray-600 mb-12">
            Atalay Servis olarak {districtName}'de endüstriyel mutfak ekipmanlarının tüm servis ihtiyaçlarını karşılıyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ocak Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">Ocak Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay ocak bakım, onarım, temizlik ve teknik destek hizmetleri.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Ocak tamircisi hizmetleri</li>
                <li>✓ Periyodik bakım</li>
                <li>✓ Acil onarım</li>
                <li>✓ Yedek parça değişimi</li>
              </ul>
              <Link href="/hizmetler/ocak-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Izgara Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="text-5xl mb-4">🍖</div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">Izgara Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay ızgara temizliği, bakım, onarım ve hijyen hizmetleri.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Izgara tamircisi hizmetleri</li>
                <li>✓ Profesyonel temizlik</li>
                <li>✓ Bakım ve onarım</li>
                <li>✓ Yedek parça tedariki</li>
              </ul>
              <Link href="/hizmetler/izgara-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Fritöz Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="text-5xl mb-4">🍟</div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">Fritöz Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay fritöz bakım, yağ değişimi, temizlik ve onarım hizmetleri.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Fritöz tamircisi hizmetleri</li>
                <li>✓ Yağ değişimi ve filtreleme</li>
                <li>✓ Güvenlik kontrolleri</li>
                <li>✓ Acil servis</li>
              </ul>
              <Link href="/hizmetler/fritoz-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
                Detaylı Bilgi →
              </Link>
            </div>

            {/* Kuzine Servisi */}
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-2 border-red-200">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h3 className="text-2xl font-bold mb-3 text-red-700">Kuzine Servisi</h3>
              <p className="text-gray-600 mb-4">
                {districtName}'de Atalay kuzine ekipmanları bakım, onarım ve teknik destek hizmetleri.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-4">
                <li>✓ Kuzine tamircisi hizmetleri</li>
                <li>✓ Tüm ekipman bakımı</li>
                <li>✓ Onarım ve iyileştirme</li>
                <li>✓ 24/7 destek</li>
              </ul>
              <Link href="/hizmetler/kuzine-servisi" className="text-red-600 hover:text-red-800 font-bold text-sm">
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
          <h2 className="text-3xl font-bold mb-4">{districtName}'de Hizmet Almak İstiyorsanız</h2>
          <p className="text-lg mb-6 text-red-100">Profesyonel tamircisi ekibimiz her zaman hazır</p>
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

