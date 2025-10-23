'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">Atalay Servis</h3>
            <p className="text-gray-400 text-sm mb-4">
              İstanbul'da endüstriyel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanlaşmış bir şirkettir.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16.5 12.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="white"/><circle cx="17.5" cy="6.5" r="1.5" fill="white"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-600">Hizmetler</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/hizmetler/ocak-servisi" className="hover:text-red-600 transition">Ocak Servisi</Link></li>
              <li><Link href="/hizmetler/izgara-servisi" className="hover:text-red-600 transition">Izgara Servisi</Link></li>
              <li><Link href="/hizmetler/fritoz-servisi" className="hover:text-red-600 transition">Fritöz Servisi</Link></li>
              <li><Link href="/hizmetler/kuzine-servisi" className="hover:text-red-600 transition">Kuzine Servisi</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-600">Hızlı Linkler</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-red-600 transition">Ana Sayfa</Link></li>
              <li><Link href="/hizmetler" className="hover:text-red-600 transition">Tüm Hizmetler</Link></li>
              <li><Link href="/blog" className="hover:text-red-600 transition">Blog</Link></li>
              <li><Link href="/iletisim" className="hover:text-red-600 transition">İletişim</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-red-600">İletişim</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">📞</span>
                <div>
                  <p className="font-semibold text-white">0212 567 15 60</p>
                  <p className="text-xs">24/7 Hizmet</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 mt-1">📧</span>
                <div>
                  <p className="font-semibold text-white">info@atalayservis.com</p>
                  <p className="text-xs">E-mail Gönder</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>&copy; 2024 Atalay Servis. Tüm hakları saklıdır.</p>
            <p className="md:text-right">
              Tasarım ve Geliştirme: <span className="text-red-600 font-semibold">Atalay Servis</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

