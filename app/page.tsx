import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Atalay Servis | İstanbul Endüstriyel Mutfak Ekipmanları Teknik Servis',
  description: 'Atalay Servis - İstanbul\'da ocak, ızgara, fritöz ve kuzine servisi. 24/7 profesyonel teknik destek ve bakım hizmetleri.',
  keywords: 'atalay servis, ocak servisi, ızgara servisi, fritöz servisi, kuzine servisi, İstanbul',
  openGraph: {
    title: 'Atalay Servis | İstanbul Endüstriyel Mutfak Ekipmanları Teknik Servis',
    description: 'İstanbul\'da ocak, ızgara, fritöz ve kuzine servisi. 24/7 profesyonel teknik destek.',
    type: 'website',
    locale: 'tr_TR',
  },
};

export default function Home() {

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      {/* Header */}
      <Header />

      {/* Hero Section - Slider */}
      <HeroSlider />

      {/* Solutions Section - Hızlı ve Güvenilir Çözümler */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <p className="text-red-600 font-bold text-lg mb-2">ATALAY ENDÜSTRİYEL MUTFAK SERVİSİ</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Hızlı ve Güvenilir Çözümler</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Atalay endüstriyel mutfak ekipmanlarının arızalarını hızlıca çözmek için buradayız. İşte hizmetlerimiz:
              </p>

              {/* Solutions List */}
              <div className="space-y-6">
                {/* Solution 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Arızayı Tespit Edelim</h3>
                    <p className="text-gray-600">
                      Uzman teknisyenlerimiz, ekipmanlarınızın detaylı bir şekilde analiz ederek arızaların kaynağını belirler.
                    </p>
                  </div>
                </div>

                {/* Solution 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tamir Maliyetinizi Belirleyelim</h3>
                    <p className="text-gray-600">
                      Şeffaf ve uygun fiyatlandırma planları sunarak, ekipmanlarınızın bakımını ekonomik bir şekilde gerçekleştiriz.
                    </p>
                  </div>
                </div>

                {/* Solution 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-600 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Çözüme Kavuşturalım</h3>
                    <p className="text-gray-600">
                      Ekipmanlarınızın tamirini hızlıca yaparak, performansını optimize ederek işletmenizin kesintisiz çalışmasını sağlarız.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block">
              <div className="rounded-lg overflow-hidden shadow-xl h-96">
                <Image
                  src="/img/atalay-servis-banner.jpeg"
                  alt="Atalay Servis - Endüstriyel Mutfak Ekipmanları"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">Hizmetlerimiz</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              İstanbul'da endüstriyel mutfak ekipmanları için profesyonel tamircisi ve servis hizmetleri
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Atalay Ocak Servisi */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer">
              {/* Image Background */}
              <div className="relative w-full h-full overflow-hidden bg-gray-800">
                <Image
                  src="/img/atalay-gazli-ocak-4-lu-set-ustu.webp"
                  alt="Atalay Ocak Servisi - Profesyonel Ocak Tamircisi"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Dark Overlay - Minimal */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
              </div>

              {/* Content - Bottom Badge Style */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">🔥</div>
                  <h3 className="text-2xl font-bold text-white">Ocak Servisi</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  Profesyonel ocak tamircisi hizmetleri. Bakım, onarım ve teknik destek.
                </p>
                <Link
                  href="/hizmetler/ocak-servisi"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition group/link"
                >
                  Detaylı Bilgi <span className="group-hover/link:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>

            {/* Atalay Izgara Servisi */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer">
              {/* Image Background */}
              <div className="relative w-full h-full overflow-hidden bg-gray-800">
                <Image
                  src="/img/atalay-izgara.jpeg"
                  alt="Atalay Izgara Servisi - Profesyonel Izgara Tamircisi"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Dark Overlay - Minimal */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
              </div>

              {/* Content - Bottom Badge Style */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">🍖</div>
                  <h3 className="text-2xl font-bold text-white">Izgara Servisi</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  Profesyonel izgara tamircisi hizmetleri. Temizlik, bakım ve onarım.
                </p>
                <Link
                  href="/hizmetler/izgara-servisi"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition group/link"
                >
                  Detaylı Bilgi <span className="group-hover/link:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>

            {/* Atalay Fritöz Servisi */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer">
              {/* Image Background */}
              <div className="relative w-full h-full overflow-hidden bg-gray-800">
                <Image
                  src="/img/fritoz-atalay-servisi.jpg"
                  alt="Atalay Fritöz Servisi - Profesyonel Fritöz Tamircisi"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Dark Overlay - Minimal */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
              </div>

              {/* Content - Bottom Badge Style */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">🍟</div>
                  <h3 className="text-2xl font-bold text-white">Fritöz Servisi</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  Profesyonel fritöz tamircisi hizmetleri. Bakım, yağ değişimi ve onarım.
                </p>
                <Link
                  href="/hizmetler/fritoz-servisi"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition group/link"
                >
                  Detaylı Bilgi <span className="group-hover/link:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>

            {/* Atalay Kuzine Servisi */}
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer">
              {/* Image Background */}
              <div className="relative w-full h-full overflow-hidden bg-gray-800">
                <Image
                  src="/img/kuzine-atalay-servis.jpg"
                  alt="Atalay Kuzine Servisi - Profesyonel Kuzine Tamircisi"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                {/* Dark Overlay - Minimal */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
              </div>

              {/* Content - Bottom Badge Style */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-xl font-bold">👨‍🍳</div>
                  <h3 className="text-2xl font-bold text-white">Kuzine Servisi</h3>
                </div>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  Profesyonel kuzine tamircisi hizmetleri. Bakım, onarım ve teknik destek.
                </p>
                <Link
                  href="/hizmetler/kuzine-servisi"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition group/link"
                >
                  Detaylı Bilgi <span className="group-hover/link:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Neden Atalay Servis */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">Neden Atalay Servis?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              İstanbul'da endüstriyel mutfak ekipmanları servisinde en güvenilir ve profesyonel çözüm ortağınız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 - Profesyonel Teknisyen */}
            <div className="group bg-gradient-to-br from-red-700 to-red-600 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <div className="mb-6 text-5xl">👨‍🔧</div>
              <h3 className="text-xl font-bold mb-3">Profesyonel Teknisyen</h3>
              <p className="text-red-100">
                Uzman ve deneyimli teknisyenlerimiz tüm markaların ekipmanlarını onarır.
              </p>
            </div>

            {/* Card 2 - Orijinal Parça */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-2 border-gray-100">
              <div className="mb-6 text-5xl">✅</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Orijinal Parça</h3>
              <p className="text-gray-600">
                Kullandığımız tüm yedek parçalar %100 orijinal ve garantilidir.
              </p>
            </div>

            {/* Card 3 - 24/7 Destek */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-2 border-gray-100">
              <div className="mb-6 text-5xl">⏰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Destek</h3>
              <p className="text-gray-600">
                Acil durumlarda günün her saati bizimle iletişime geçebilirsiniz.
              </p>
            </div>

            {/* Card 4 - Hızlı Müdahale */}
            <div className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 border-2 border-gray-100">
              <div className="mb-6 text-5xl">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Hızlı Müdahale</h3>
              <p className="text-gray-600">
                Arızalara en kısa sürede müdahale ederek işletmenizi çalışır durumda tutarız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-700 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Hemen Bize Ulaşın</h2>
          <p className="text-xl mb-8">İstanbul'un her yerinde hizmet veriyoruz</p>
          <Link
            href="/iletisim"
            className="bg-white text-red-700 hover:bg-red-50 px-8 py-3 rounded-lg font-bold inline-block transition shadow-lg"
          >
            İletişim Formu
          </Link>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-red-700">İstanbul'da Hizmet Verdiğimiz İlçeler</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: 'Adalar', slug: 'adalar-atalay-servisi' },
              { name: 'Avcılar', slug: 'avcilar-atalay-servisi' },
              { name: 'Bahçelievler', slug: 'bahcelievler-atalay-servisi' },
              { name: 'Bakırköy', slug: 'bakirkoy-atalay-servisi' },
              { name: 'Başakşehir', slug: 'basaksehir-atalay-servisi' },
              { name: 'Bayrampaşa', slug: 'bayrampasa-atalay-servisi' },
              { name: 'Beşiktaş', slug: 'besiktas-atalay-servisi' },
              { name: 'Beykoz', slug: 'beykoz-atalay-servisi' },
              { name: 'Beyoğlu', slug: 'beyoglu-atalay-servisi' },
              { name: 'Büyükçekmece', slug: 'buyukcekmece-atalay-servisi' },
              { name: 'Çatalca', slug: 'catalca-atalay-servisi' },
              { name: 'Çekmeköy', slug: 'cekmekoy-atalay-servisi' },
              { name: 'Esenler', slug: 'esenler-atalay-servisi' },
              { name: 'Esenyurt', slug: 'esenyurt-atalay-servisi' },
              { name: 'Eyüpsultan', slug: 'eyupsultan-atalay-servisi' },
              { name: 'Fatih', slug: 'fatih-atalay-servisi' },
              { name: 'Gaziosmanpaşa', slug: 'gaziosmanpasa-atalay-servisi' },
              { name: 'Güngören', slug: 'gungoren-atalay-servisi' },
              { name: 'Kadıköy', slug: 'kadikoy-atalay-servisi' },
              { name: 'Kağıthane', slug: 'kagithane-atalay-servisi' },
              { name: 'Kartal', slug: 'kartal-atalay-servisi' },
              { name: 'Kastamonu', slug: 'kastamonu-atalay-servisi' },
              { name: 'Kucaeli', slug: 'kucaeli-atalay-servisi' },
              { name: 'Küçükçekmece', slug: 'kucukcekmece-atalay-servisi' },
              { name: 'Maltepe', slug: 'maltepe-atalay-servisi' },
              { name: 'Pendik', slug: 'pendik-atalay-servisi' },
              { name: 'Sarıyer', slug: 'sariyer-atalay-servisi' },
              { name: 'Şile', slug: 'sile-atalay-servisi' },
              { name: 'Şişli', slug: 'sisli-atalay-servisi' },
              { name: 'Taksim', slug: 'taksim-atalay-servisi' },
              { name: 'Tuzla', slug: 'tuzla-atalay-servisi' },
              { name: 'Ümraniye', slug: 'umraniye-atalay-servisi' },
              { name: 'Üsküdar', slug: 'uskudar-atalay-servisi' },
              { name: 'Zeytinburnu', slug: 'zeytinburnu-atalay-servisi' },
            ].map((district) => (
              <Link
                key={district.slug}
                href={`/servis/${district.slug}`}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border-l-4 border-red-600 hover:bg-red-50"
              >
                <span className="text-gray-800 font-semibold hover:text-red-700">{district.name} Atalay Servisi</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-red-700">Atalay Servis - İstanbul'da Endüstriyel Mutfak Ekipmanları Teknik Servisi</h2>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              <strong>Atalay Servis</strong>, İstanbul'da endüstriyel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanlaşmış bir şirkettir. Ocak, ızgara, fritöz ve kuzine gibi profesyonel mutfak ekipmanlarının tüm sorunlarına hızlı ve etkili çözümler sunuyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Atalay Ocak Servisi</h3>
            <p>
              Atalay ocak servisi, endüstriyel mutfaklarda kullanılan ocakların bakım ve onarımında profesyonel hizmet sunar. Ocağınızın arızasını tespit ederek, hızlı bir şekilde onarıyoruz. Düzenli bakım hizmetleri ile ocağınızın ömrünü uzatabilirsiniz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Atalay Izgara Servisi</h3>
            <p>
              Atalay ızgara servisi, profesyonel mutfaklarda kullanılan ızgra ekipmanlarının temizliği, bakımı ve onarımını yapıyoruz. Hijyenik ve verimli bir mutfak ortamı için ızgaranızın düzenli bakımı önemlidir. Uzman teknisyenlerimiz, ızgaranızın en iyi performansı göstermesini sağlar.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Atalay Fritöz Servisi</h3>
            <p>
              Atalay fritöz servisi, endüstriyel fritöz ekipmanlarının bakım, temizlik ve onarım hizmetlerini sunar. Fritöz yağının düzenli değiştirilmesi, filtre temizliği ve teknik kontroller yapıyoruz. Güvenli ve hijyenik bir fritöz ortamı için bize başvurun.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Atalay Kuzine Servisi</h3>
            <p>
              Atalay kuzine servisi, endüstriyel kuzine ekipmanlarının tüm bakım ve onarım işlerini yapıyoruz. Profesyonel ve hızlı hizmet ile kuzine ekipmanlarınızın kesintisiz çalışmasını sağlıyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Neden Atalay Servis?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>24/7 Hizmet:</strong> Acil durumlarda her zaman yanınızdayız</li>
              <li><strong>Profesyonel Teknisyenler:</strong> Deneyimli ve sertifikalı teknisyenler</li>
              <li><strong>Hızlı Müdahale:</strong> Aynı gün müdahale garantisi</li>
              <li><strong>Uygun Fiyatlar:</strong> Şeffaf ve rekabetçi fiyatlandırma</li>
              <li><strong>Kaliteli Yedek Parçalar:</strong> Orijinal ve kaliteli yedek parçalar kullanıyoruz</li>
              <li><strong>İstanbul'un Her Yerinde:</strong> Tüm ilçelerde hizmet veriyoruz</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">İstanbul'da Atalay Servis Hizmetleri</h3>
            <p>
              Atalay Servis, İstanbul'un tüm ilçelerinde hizmet vermektedir. Beşiktaş, Kadıköy, Şişli, Beyoğlu, Fatih, Bakırköy, Avcılar, Esenyurt, Pendik, Kartal, Maltepe, Üsküdar, Ümraniye, Çekmeköy, Sarıyer, Beykoz, Eyüpsultan, Gaziosmanpaşa, Esenler, Bayrampaşa, Kağıthane, Şile, Tuzla, Çatalca, Büyükçekmece, Küçükçekmece, Zeytinburnu, Güngören, Bahçelievler, Başakşehir, Beyoğlu, Adalar ve diğer tüm ilçelerde profesyonel servis hizmetleri sunuyoruz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">Bize Nasıl Ulaşabilirsiniz?</h3>
            <p>
              Atalay Servis ile iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Telefon:</strong> 0212 567 15 60</li>
              <li><strong>E-mail:</strong> info@atalayservis.com</li>
            </ul>

            <p className="mt-8 pt-8 border-t border-gray-300">
              Endüstriyel mutfak ekipmanlarınızın bakım ve onarımı için Atalay Servis'i tercih edin. Profesyonel, hızlı ve güvenilir hizmet için bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
