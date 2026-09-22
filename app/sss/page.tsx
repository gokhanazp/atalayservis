import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQClient from './faq-client';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular (SSS) | Atalay Servis',
  description: 'Atalay Servis hakkında sık sorulan sorular ve cevapları. Servis hizmetleri, fiyatlandırma, garanti ve daha fazlası.',
};

export default function FAQ() {
  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Atalay Servis kaç saat hizmet veriyor?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atalay Servis olarak 24/7 hizmet veriyoruz. Hafta içi, hafta sonu ve tatil günlerinde acil servis taleplerini karşılamak için her zaman hazırız."
        }
      },
      {
        "@type": "Question",
        "name": "Hangi markaların ekipmanlarına hizmet veriyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tüm markaların endüstriyel mutfak ekipmanlarına hizmet veriyoruz. Ocak, ızgara, fritöz, kuzine ve diğer profesyonel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerini sunuyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Servis maliyeti ne kadar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Servis maliyeti, ekipmanın türü, arızanın çeşidi ve gerekli parçalara göre değişir. Ücretsiz arıza teşhisi yapıyoruz ve tamir öncesinde müşteriye fiyat teklifi sunuyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "İstanbul'un hangi bölgelerine hizmet veriyorsunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "İstanbul'un tüm ilçelerine hizmet veriyoruz. Besiktaş, Kadıköy, Üsküdar, Şişli, Beyoğlu, Fatih, Bakırköy ve diğer tüm ilçelerde profesyonel servis hizmetleri sunuyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Servis sonrası garanti veriyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, yapılan tüm tamirlara garanti veriyoruz. Değiştirilen parçalara 6 ay, yapılan işçiliğe 3 ay garanti sunuyoruz."
        }
      },
      {
        "@type": "Question",
        "name": "Düzenli bakım hizmetleri sunuyor musunuz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, düzenli bakım ve preventif bakım hizmetleri sunuyoruz. Aylık, üç aylık veya yıllık bakım paketleri ile ekipmanlarınızın uzun ömürlü ve verimli çalışmasını sağlıyoruz."
        }
      }
    ]
  };

  const faqs = [
    {
      category: 'Genel Sorular',
      questions: [
        {
          q: 'Atalay Servis kaç saat hizmet veriyor?',
          a: 'Atalay Servis olarak 24/7 hizmet veriyoruz. Hafta içi, hafta sonu ve tatil günlerinde acil servis taleplerini karşılamak için her zaman hazırız. Hızlı müdahale ve profesyonel çözüm garantisi sunuyoruz. Acil durumlarda bize WhatsApp veya telefon ile ulaşabilirsiniz.',
        },
        {
          q: 'Hangi markaların ekipmanlarına hizmet veriyorsunuz?',
          a: 'Tüm markaların endüstriyel mutfak ekipmanlarına hizmet veriyoruz. Ocak, ızgara, fritöz, kuzine ve diğer profesyonel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerini sunuyoruz. Markanız ne olursa olsun, uzman teknisyenlerimiz çözüm bulabilir.',
        },
        {
          q: 'İstanbul\'un hangi bölgelerine hizmet veriyorsunuz?',
          a: 'İstanbul\'un tüm ilçelerine hizmet veriyoruz. Besiktaş, Kadıköy, Üsküdar, Şişli, Beyoğlu, Fatih, Bakırköy ve diğer tüm ilçelerde profesyonel servis hizmetleri sunuyoruz. Hızlı müdahale ve aynı gün servis garantisi ile yanınızdayız.',
        },
      ],
    },
    {
      category: 'Fiyatlandırma & Ödeme',
      questions: [
        {
          q: 'Servis maliyeti ne kadar?',
          a: 'Servis maliyeti, ekipmanın türü, arızanın çeşidi ve gerekli parçalara göre değişir. Ücretsiz arıza teşhisi yapıyoruz ve tamir öncesinde müşteriye fiyat teklifi sunuyoruz. Şeffaf ve uygun fiyatlandırma politikamız ile güvenle hizmet alabilirsiniz.',
        },
        {
          q: 'Arıza teşhisi ücretsiz mi?',
          a: 'Evet, arıza teşhisi tamamen ücretsizdir. Teknisyenlerimiz ekipmanınızı detaylı bir şekilde inceleyerek arızanın kaynağını belirler ve size tamir maliyeti hakkında bilgi verir. Tamir yapmadan önce onay almanız gerekir.',
        },
        {
          q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
          a: 'Nakit, kredi kartı, banka transferi ve çek ödeme yöntemlerini kabul ediyoruz. Kurumsal müşterilerimiz için fatura ve vadeli ödeme seçenekleri de mevcuttur. Tamir tamamlandıktan sonra ödeme yapabilirsiniz.',
        },
      ],
    },
    {
      category: 'Garanti & Hizmet Kalitesi',
      questions: [
        {
          q: 'Servis sonrası garanti veriyor musunuz?',
          a: 'Evet, yapılan tüm tamirlara garanti veriyoruz. Değiştirilen parçalara 6 ay, yapılan işçiliğe 3 ay garanti sunuyoruz. Garanti süresi içinde sorun yaşarsanız, ücretsiz olarak tekrar müdahale ediyoruz.',
        },
        {
          q: 'Düzenli bakım hizmetleri sunuyor musunuz?',
          a: 'Evet, düzenli bakım ve preventif bakım hizmetleri sunuyoruz. Aylık, üç aylık veya yıllık bakım paketleri ile ekipmanlarınızın uzun ömürlü ve verimli çalışmasını sağlıyoruz. Düzenli bakım, arızaları önler ve işletme maliyetlerini azaltır.',
        },
        {
          q: 'Orijinal parça mı yoksa muadil parça mı kullanıyorsunuz?',
          a: 'Müşterinin tercihine göre orijinal veya sertifikalı muadil parçalar kullanıyoruz. Orijinal parçalar daha pahalı olsa da daha uzun ömürlüdür. Tamir öncesinde hangi parçaların kullanılacağını müşteri ile konuşuyoruz.',
        },
      ],
    },
    {
      category: 'Teknik Sorular',
      questions: [
        {
          q: 'Ekipmanım arızalanırsa ne yapmalıyım?',
          a: 'Hemen bize telefon veya WhatsApp ile ulaşın. Arızanın türünü anlatın, mümkünse fotoğraf gönderin. Teknisyenlerimiz size ön tanı verir ve hızlıca müdahale eder. Acil durumlarda aynı gün servis yapabiliriz.',
        },
        {
          q: 'Servis süresi ne kadar?',
          a: 'Servis süresi arızanın türüne göre değişir. Basit arızalar 1-2 saatte çözülebilirken, karmaşık arızalar daha uzun sürebilir. Parça değişimi gerekirse, parça temin süresi de eklenebilir. Müşteri ile zaman konusunda anlaşma yapılır.',
        },
        {
          q: 'Ekipmanı kaldırıp götürüyor musunuz?',
          a: 'Evet, gerekirse ekipmanı işletmemize götürerek tamir yapabiliriz. Ancak çoğu zaman yerinde tamir yapabiliriz. Tamir yöntemi arızanın türüne göre belirlenir. Taşıma maliyeti ayrıca hesaplanır.',
        },
      ],
    },
    {
      category: 'İletişim & Randevu',
      questions: [
        {
          q: 'Randevu almam gerekiyor mu?',
          a: 'Acil durumlarda randevu almadan hemen müdahale ediyoruz. Rutin bakım ve onarımlar için randevu almanız önerilir. Böylece teknisyenlerimiz zamanını ayırabilir ve daha hızlı hizmet verebilir.',
        },
        {
          q: 'Hafta sonu ve tatil günlerinde hizmet veriyor musunuz?',
          a: 'Evet, hafta sonu ve tatil günlerinde de hizmet veriyoruz. Acil durumlarda 24/7 müdahale yapabiliriz. Hafta sonu ve tatil günlerinde ek ücret alınabilir.',
        },
        {
          q: 'Bize nasıl ulaşabiliriz?',
          a: 'Telefon: +90 536 931 96 67\nWhatsApp: +90 536 931 96 67\nEmail: info@atalayservis.com\nAdres: İstanbul, Türkiye\n\nHer zaman yanınızdayız!',
        },
      ],
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

      {/* Schema Markup - FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-red-700 to-red-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 hero-zoom opacity-20" style={{backgroundImage: 'url(/img/slider-05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Sık Sorulan Sorular</h1>
          <p className="text-xl">Atalay Servis hakkında merak ettikleriniz</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <FAQClient faqs={faqs} />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Başka Sorunuz Mu Var?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Cevabını bulamadığınız sorular için bize ulaşın. Profesyonel ekibimiz size yardımcı olmaktan mutlu olacak.
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

