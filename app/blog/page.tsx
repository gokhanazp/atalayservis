import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Blog | Atalay Servis',
  description: 'Endüstriyel mutfak ekipmanları bakım ve onarım hakkında ipuçları ve bilgiler',
  keywords: 'blog, mutfak ekipmanları, bakım, onarım, ipuçları',
};

export default function Blog() {
  const posts = [
    {
      id: 1,
      slug: 'atalay-servis-profesyonel-tamircisi-hizmetleri',
      title: 'Atalay Servis - Profesyonel Tamircisi Servis Hizmetleri',
      excerpt: 'Atalay Servis olarak endüstriyel mutfak ekipmanlarının profesyonel tamircisi servis hizmetleri sunuyoruz. Uzman teknisyenlerimiz ile ekipmanlarınızın bakım ve onarımını güvenle yapabilirsiniz.',
      date: '2024-01-15',
      category: 'Atalay Servis',
    },
    {
      id: 2,
      slug: 'atalay-ocak-servis-profesyonel-tamircisi',
      title: 'Atalay Ocak Servis - Profesyonel Tamircisi Servis',
      excerpt: 'Atalay ocak servis hizmetleri için profesyonel tamircisi servis ekibimiz her zaman hazır. Atalay ocak tamircisi olarak, tüm ocak modellerinin bakım ve onarımını yapıyoruz.',
      date: '2024-01-10',
      category: 'Atalay Ocak Servis',
    },
    {
      id: 3,
      slug: 'atalay-izgara-servisi-profesyonel-tamircisi',
      title: 'Atalay Izgara Servisi - Profesyonel Tamircisi Servis',
      excerpt: 'Atalay ızgara servisi hizmetleri için profesyonel tamircisi servis ekibimiz hazır. Atalay ızgara tamircisi olarak, tüm ızgara modellerinin bakım ve onarımını yapıyoruz.',
      date: '2024-01-05',
      category: 'Atalay Izgara Servisi',
    },
    {
      id: 4,
      slug: 'atalay-fritoz-servisi-profesyonel-tamircisi',
      title: 'Atalay Fritöz Servisi - Profesyonel Tamircisi Servis',
      excerpt: 'Atalay fritöz servisi hizmetleri için profesyonel tamircisi servis ekibimiz hazır. Atalay fritöz tamircisi olarak, tüm fritöz modellerinin bakım ve onarımını yapıyoruz.',
      date: '2023-12-28',
      category: 'Atalay Fritöz Servisi',
    },
    {
      id: 5,
      slug: 'atalay-kuzine-servisi-profesyonel-tamircisi',
      title: 'Atalay Kuzine Servisi - Profesyonel Tamircisi Servis',
      excerpt: 'Atalay kuzine servisi hizmetleri için profesyonel tamircisi servis ekibimiz hazır. Atalay kuzine tamircisi olarak, tüm kuzine modellerinin bakım ve onarımını yapıyoruz.',
      date: '2023-12-20',
      category: 'Atalay Kuzine Servisi',
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
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl">Endüstriyel mutfak ekipmanları hakkında ipuçları ve bilgiler</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border-l-4 border-red-600">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                    <time className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-red-700">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    Devamını Oku →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

