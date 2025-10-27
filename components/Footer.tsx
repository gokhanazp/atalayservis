'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Phone, Mail, Clock } from 'lucide-react';

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
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Instagram className="w-5 h-5" />
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
                  <a href="tel:+905336681981" className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition">
                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-white">+90 533 668 19 81</p>
                      <p className="text-xs text-gray-500">24/7 Hizmet</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@atalayservis.com" className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition">
                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
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
                <li className="pt-2 border-t border-gray-800 mt-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-red-600 font-bold text-xs">ACİL SERVİS: 24/7</span>
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

