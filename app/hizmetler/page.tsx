import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Flame, Flame as Grill, Zap, ChefHat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | Atalay Servis',
  description: 'Ocak, ızgara, fritöz ve kuzine servisi. İstanbul\'da profesyonel endüstriyel mutfak ekipmanları teknik destek.',
};

export default function Services() {
  const services = [
    {
      id: 'atalay-ocak-servisi',
      title: 'Atalay Ocak Servisi',
      description: 'Profesyonel ocak tamircisi ve bakım hizmetleri',
      details: 'Atalay ocak tamircisi olarak tüm markaların ocaklarına profesyonel servis hizmetleri sunuyoruz. Arıza teşhisi, parça değişimi, bakım ve temizlik hizmetleri ile ocak ekipmanlarınızın uzun ömürlü kullanımını sağlarız.',
      image: '/img/atalay-gazli-ocak-4-lu-set-ustu.webp',
      icon: 'flame',
    },
    {
      id: 'atalay-izgara-servisi',
      title: 'Atalay Izgara Servisi',
      description: 'Profesyonel izgara tamircisi ve onarım hizmetleri',
      details: 'Atalay izgara tamircisi hizmetleri ile izgara ekipmanlarının bakım, temizlik ve onarımında uzmanız. Hızlı ve güvenilir servis garantisi ile endüstriyel mutfaklarınızın kesintisiz çalışmasını sağlarız.',
      image: '/img/atalay-izgara.jpeg',
      icon: 'grill',
    },
    {
      id: 'atalay-fritoz-servisi',
      title: 'Atalay Fritöz Servisi',
      description: 'Profesyonel fritöz tamircisi ve bakım hizmetleri',
      details: 'Atalay fritöz tamircisi olarak fritöz ekipmanlarının güvenli ve hijyenik bakımını sağlıyoruz. Yağ değişimi, filtre temizliği, onarım ve teknik destek hizmetleri ile fritöz servis ihtiyaçlarınızı karşılarız.',
      image: '/img/fritoz-atalay-servisi.jpg',
      icon: 'zap',
    },
    {
      id: 'atalay-kuzine-servisi',
      title: 'Atalay Kuzine Servisi',
      description: 'Profesyonel kuzine tamircisi ve onarım hizmetleri',
      details: 'Atalay kuzine tamircisi hizmetleri ile endüstriyel kuzine ekipmanlarının tüm bakım ve onarım işlerini profesyonelce yapıyoruz. Teknik destek ve hızlı müdahale ile işletmenizin verimliliğini artırırız.',
      image: '/img/kuzine-atalay-servis.jpg',
      icon: 'chef',
    },
  ];

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

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 hero-zoom opacity-20" style={{backgroundImage: 'url(/img/slider-05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Hizmetlerimiz</h1>
          <p className="text-xl">İstanbul'da endüstriyel mutfak ekipmanları için profesyonel servis hizmetleri</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service) => (
              <Link key={service.id} href={`/hizmetler/${service.id}`}>
                <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 h-96 cursor-pointer">
                  {/* Image Background */}
                  <div className="relative w-full h-full overflow-hidden bg-gray-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    {/* Dark Overlay - Minimal */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500"></div>
                  </div>

                  {/* Content - Bottom Badge Style */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-8 translate-y-16 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                        {service.icon === 'flame' && <Flame className="w-8 h-8" />}
                        {service.icon === 'grill' && <Grill className="w-8 h-8" />}
                        {service.icon === 'zap' && <Zap className="w-8 h-8" />}
                        {service.icon === 'chef' && <ChefHat className="w-8 h-8" />}
                      </div>
                      <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-bold transition group/link">
                      Detaylı Bilgi <span className="group-hover/link:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Hizmet Almak İstiyorsanız</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Profesyonel tamircisi ve servis hizmetlerimiz için bize ulaşın. Hızlı yanıt ve güvenilir hizmet garantisi.
          </p>
          <Link
            href="/iletisim"
            className="bg-white text-red-700 hover:bg-red-50 px-10 py-4 rounded-lg font-bold inline-block transition transform hover:scale-105 shadow-lg"
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

