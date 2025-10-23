'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Acil Servis mi Gerekli?</h3>
              <p className="text-red-100">24/7 profesyonel tamircisi hizmetleri için hemen iletişime geçin</p>
            </div>
            <div className="flex gap-4">
              <a
                href="tel:+905013001981"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition transform hover:scale-105"
              >
                📞 Hemen Ara
              </a>
              <a
                href="https://wa.me/905013001981"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/30 transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-red-600 mb-2">Atalay Servis</h2>
                <p className="text-xs text-red-500 font-semibold tracking-widest">PROFESYONEL TAMIRCISI</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                İstanbul'da endüstriyel mutfak ekipmanlarının bakım, onarım ve teknik destek hizmetlerinde uzmanlaşmış profesyonel bir şirkettir.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16.5 12.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" fill="black"/><circle cx="17.5" cy="6.5" r="1.5" fill="black"/></svg>
                </a>
              </div>
            </div>

            {/* Hizmetler */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2">Hizmetler</h4>
              <ul className="space-y-3">
                <li><Link href="/hizmetler/atalay-ocak-servisi" className="text-gray-400 hover:text-red-600 transition text-sm">🔥 Ocak Servisi</Link></li>
                <li><Link href="/hizmetler/atalay-izgara-servisi" className="text-gray-400 hover:text-red-600 transition text-sm">🍖 Izgara Servisi</Link></li>
                <li><Link href="/hizmetler/atalay-fritoz-servisi" className="text-gray-400 hover:text-red-600 transition text-sm">🍟 Fritöz Servisi</Link></li>
                <li><Link href="/hizmetler/atalay-kuzine-servisi" className="text-gray-400 hover:text-red-600 transition text-sm">👨‍🍳 Kuzine Servisi</Link></li>
              </ul>
            </div>

            {/* Sayfalar */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2">Sayfalar</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-400 hover:text-red-600 transition text-sm">Ana Sayfa</Link></li>
                <li><Link href="/hizmetler" className="text-gray-400 hover:text-red-600 transition text-sm">Tüm Hizmetler</Link></li>
                <li><Link href="/sss" className="text-gray-400 hover:text-red-600 transition text-sm">Sık Sorulan Sorular</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-red-600 transition text-sm">Blog</Link></li>
              </ul>
            </div>

            {/* İletişim */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2">İletişim</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+905013001981" className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition">
                    <span className="text-red-600">📞</span>
                    <div className="text-sm">
                      <p className="font-semibold text-white">+90 501 300 19 81</p>
                      <p className="text-xs text-gray-500">24/7 Hizmet</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@atalayservis.com" className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition">
                    <span className="text-red-600">📧</span>
                    <div className="text-sm">
                      <p className="font-semibold text-white">info@atalayservis.com</p>
                      <p className="text-xs text-gray-500">E-mail Gönder</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Çalışma Saatleri */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-red-600 pb-2">Çalışma Saatleri</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-gray-400">Pazartesi - Cuma</span>
                  <span className="text-white font-semibold">08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Cumartesi</span>
                  <span className="text-white font-semibold">09:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-400">Pazar</span>
                  <span className="text-red-600 font-semibold">Kapalı</span>
                </li>
                <li className="pt-2 border-t border-gray-800 mt-2">
                  <span className="text-red-600 font-bold text-xs">🚨 ACİL SERVİS: 24/7</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
              <p>&copy; 2024 Atalay Servis. Tüm hakları saklıdır.</p>
              <div className="flex gap-6">
                <Link href="#" className="hover:text-red-600 transition">Gizlilik Politikası</Link>
                <Link href="#" className="hover:text-red-600 transition">Kullanım Şartları</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

