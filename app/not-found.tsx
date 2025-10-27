import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertCircle, Home, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <Header />
      
      {/* 404 Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <AlertCircle className="w-24 h-24 text-red-600" />
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Sayfa Bulunamadı</h2>
          
          {/* Description */}
          <p className="text-xl text-gray-600 mb-8">
            Aradığınız sayfa maalesef bulunamadı. Sayfa silinmiş, taşınmış veya URL yanlış olabilir.
          </p>

          {/* Suggestions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-gray-900 mb-4">Şunları deneyebilirsiniz:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Ana sayfaya dönün</li>
              <li>✓ Hizmetlerimizi inceleyin</li>
              <li>✓ Blog yazılarımızı okuyun</li>
              <li>✓ Bize iletişim kurun</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-700 transition"
            >
              <Home className="w-5 h-5" />
              Ana Sayfaya Dön
            </Link>
            
            <a
              href="tel:+905336681981"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              <Phone className="w-5 h-5" />
              Bizi Arayın
            </a>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Hızlı Linkler:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/hizmetler" className="text-red-600 hover:text-red-700 font-semibold">
                Hizmetler
              </Link>
              <Link href="/blog" className="text-red-600 hover:text-red-700 font-semibold">
                Blog
              </Link>
              <Link href="/sss" className="text-red-600 hover:text-red-700 font-semibold">
                SSS
              </Link>
              <Link href="/iletisim" className="text-red-600 hover:text-red-700 font-semibold">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

