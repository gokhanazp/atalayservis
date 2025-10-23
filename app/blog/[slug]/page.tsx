import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

// Blog yazıları - slug formatında
const blogPosts = [
  {
    id: 1,
    slug: 'atalay-servis-profesyonel-tamircisi-hizmetleri',
    title: 'Atalay Servis - Profesyonel Tamircisi Servis Hizmetleri',
    date: '2024-01-15',
    category: 'Atalay Servis',
    content: `
      <h2>Atalay Servis Hakkında</h2>
      <p>Atalay Servis, İstanbul'da endüstriyel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanlaşmış bir şirkettir. Profesyonel tamircisi servis ekibimiz, tüm Atalay ürünlerinin bakım ve onarımında deneyimlidir.</p>
      
      <h3>Atalay Servis Hizmetleri</h3>
      <p>Atalay Servis kapsamında sunulan hizmetler:</p>
      <ul>
        <li>Atalay ocak servis ve tamircisi hizmetleri</li>
        <li>Atalay ızgara servisi ve tamircisi hizmetleri</li>
        <li>Atalay fritöz servisi ve tamircisi hizmetleri</li>
        <li>Atalay kuzine servisi ve tamircisi hizmetleri</li>
        <li>Teknik destek ve danışmanlık</li>
        <li>Bakım ve onarım hizmetleri</li>
      </ul>
      
      <h3>Neden Atalay Servis?</h3>
      <p>Atalay Servis olarak, profesyonel tamircisi servis ekibimiz ile ekipmanlarınızın bakım ve onarımını güvenle yapabilirsiniz. Uzman teknisyenlerimiz, tüm Atalay ürünlerinin bakım ve onarımında deneyimlidir.</p>
    `
  },
  {
    id: 2,
    slug: 'atalay-ocak-servis-profesyonel-tamircisi',
    title: 'Atalay Ocak Servis - Profesyonel Tamircisi Servis',
    date: '2024-01-10',
    category: 'Atalay Ocak Servis',
    content: `
      <h2>Atalay Ocak Servis Hizmetleri</h2>
      <p>Atalay ocak servis hizmetleri, profesyonel tamircisi servis teknisyenleri tarafından sunulmaktadır. Atalay ocak tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm ocak modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz.</p>
      
      <h3>Atalay Ocak Tamircisi Hizmetleri</h3>
      <p>Atalay ocak servis kapsamında yapılan işlemler:</p>
      <ul>
        <li>Ocak temizliği ve bakımı</li>
        <li>Arıza teşhisi ve onarımı</li>
        <li>Yedek parça değişimi</li>
        <li>Periyodik bakım</li>
        <li>Teknik destek</li>
      </ul>
      
      <h3>Atalay Ocak Servisi Neden Önemli?</h3>
      <p>Atalay ocak servis hizmetleri, ekipmanlarınızın uzun ömürlü olması ve verimli çalışması için gereklidir. Profesyonel tamircisi servis ile ocaklarınızın bakımını düzenli olarak yaparak, arızaları önceden önleyebilirsiniz.</p>
    `
  },
  {
    id: 3,
    slug: 'atalay-izgara-servisi-profesyonel-tamircisi',
    title: 'Atalay Izgara Servisi - Profesyonel Tamircisi Servis',
    date: '2024-01-05',
    category: 'Atalay Izgara Servisi',
    content: `
      <h2>Atalay Izgara Servisi Hizmetleri</h2>
      <p>Atalay ızgara servisi hizmetleri, profesyonel tamircisi servis teknisyenleri tarafından sunulmaktadır. Atalay ızgara tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm ızgara modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz.</p>
      
      <h3>Atalay Izgara Tamircisi Hizmetleri</h3>
      <p>Atalay ızgara servisi kapsamında yapılan işlemler:</p>
      <ul>
        <li>Izgara temizliği ve bakımı</li>
        <li>Arıza teşhisi ve onarımı</li>
        <li>Yedek parça değişimi</li>
        <li>Periyodik bakım</li>
        <li>Teknik destek</li>
      </ul>
      
      <h3>Atalay Izgara Servisi Neden Önemli?</h3>
      <p>Atalay ızgara servis hizmetleri, ekipmanlarınızın uzun ömürlü olması ve hijyenik çalışması için gereklidir. Profesyonel tamircisi servis ile ızgaralarınızın bakımını düzenli olarak yaparak, arızaları önceden önleyebilirsiniz.</p>
    `
  },
  {
    id: 4,
    slug: 'atalay-fritoz-servisi-profesyonel-tamircisi',
    title: 'Atalay Fritöz Servisi - Profesyonel Tamircisi Servis',
    date: '2023-12-28',
    category: 'Atalay Fritöz Servisi',
    content: `
      <h2>Atalay Fritöz Servisi Hizmetleri</h2>
      <p>Atalay fritöz servisi hizmetleri, profesyonel tamircisi servis teknisyenleri tarafından sunulmaktadır. Atalay fritöz tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm fritöz modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz.</p>
      
      <h3>Atalay Fritöz Tamircisi Hizmetleri</h3>
      <p>Atalay fritöz servisi kapsamında yapılan işlemler:</p>
      <ul>
        <li>Fritöz temizliği ve bakımı</li>
        <li>Yağ değişimi ve filtreleme</li>
        <li>Arıza teşhisi ve onarımı</li>
        <li>Yedek parça değişimi</li>
        <li>Periyodik bakım</li>
      </ul>
      
      <h3>Atalay Fritöz Servisi Neden Önemli?</h3>
      <p>Atalay fritöz servis hizmetleri, ekipmanlarınızın uzun ömürlü olması ve güvenli çalışması için gereklidir. Profesyonel tamircisi servis ile fritözlerinizin bakımını düzenli olarak yaparak, arızaları önceden önleyebilirsiniz.</p>
    `
  },
  {
    id: 5,
    slug: 'atalay-kuzine-servisi-profesyonel-tamircisi',
    title: 'Atalay Kuzine Servisi - Profesyonel Tamircisi Servis',
    date: '2023-12-20',
    category: 'Atalay Kuzine Servisi',
    content: `
      <h2>Atalay Kuzine Servisi Hizmetleri</h2>
      <p>Atalay kuzine servisi hizmetleri, profesyonel tamircisi servis teknisyenleri tarafından sunulmaktadır. Atalay kuzine tamircisi olarak, endüstriyel mutfaklarda kullanılan tüm kuzine modellerinin bakım, onarım ve teknik destek hizmetlerini sağlıyoruz.</p>
      
      <h3>Atalay Kuzine Tamircisi Hizmetleri</h3>
      <p>Atalay kuzine servisi kapsamında yapılan işlemler:</p>
      <ul>
        <li>Kuzine temizliği ve bakımı</li>
        <li>Arıza teşhisi ve onarımı</li>
        <li>Yedek parça değişimi</li>
        <li>Periyodik bakım</li>
        <li>Teknik destek</li>
      </ul>
      
      <h3>Atalay Kuzine Servisi Neden Önemli?</h3>
      <p>Atalay kuzine servis hizmetleri, ekipmanlarınızın uzun ömürlü olması ve verimli çalışması için gereklidir. Profesyonel tamircisi servis ile kuzinenizin bakımını düzenli olarak yaparak, arızaları önceden önleyebilirsiniz.</p>
    `
  },
];

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: 'Yazı Bulunamadı | Atalay Servis',
    };
  }

  return {
    title: `${post.title} | Atalay Servis`,
    description: post.title,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // BlogPosting Schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": "Profesyonel tamircisi hizmetleri hakkında detaylı bilgi ve ipuçları",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Atalay Servis"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Atalay Servis",
      "logo": {
        "@type": "ImageObject",
        "url": "https://atalayservis.com/atalay-logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 md:pb-0">
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

      {/* Schema Markup - BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 via-red-600 to-red-500 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 hero-zoom opacity-20" style={{backgroundImage: 'url(/img/slider-05.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold border border-white/30">
              {post.category}
            </span>
            <time className="text-red-100 text-sm">
              📅 {new Date(post.date).toLocaleDateString('tr-TR')}
            </time>
          </div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Profesyonel tamircisi hizmetleri hakkında detaylı bilgi ve ipuçları
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {/* Main Content */}
          <article className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="prose prose-lg max-w-none text-gray-800 prose-headings:text-red-700 prose-a:text-red-600 prose-strong:text-gray-900">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </article>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-red-700 to-red-600 text-white rounded-xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold mb-4">Hizmet Almak İstiyorsanız?</h3>
            <p className="text-red-100 mb-6">
              Profesyonel tamircisi ekibimiz her zaman hazır. Hemen iletişime geçin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/iletisim"
                className="bg-white text-red-700 hover:bg-red-50 px-6 py-3 rounded-lg font-bold transition shadow-lg"
              >
                İletişim Formu
              </Link>
              <a
                href="https://wa.me/905494778038?text=Merhaba%20Atalay%20Servis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition shadow-lg"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.id !== post.id).slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-l-4 border-red-600 group"
                >
                  <div className="p-6">
                    <span className="text-red-600 text-sm font-bold">{relatedPost.category}</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-2 group-hover:text-red-600 transition">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2">
                      {new Date(relatedPost.date).toLocaleDateString('tr-TR')}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="flex items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="text-red-600 hover:text-red-800 font-bold flex items-center gap-2 transition"
            >
              ← Blog'a Dön
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 font-bold flex items-center gap-2 transition"
            >
              Ana Sayfa →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

