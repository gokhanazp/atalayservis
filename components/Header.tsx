'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - İletişim Bilgileri (Desktop) */}
      <div className="hidden md:block bg-gray-900 text-white py-2 md:py-3 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center flex-wrap gap-2 md:gap-4">
          <div className="flex gap-3 md:gap-6 items-center flex-wrap">
            <a href="tel:+905494778038" className="flex items-center gap-1 md:gap-2 hover:text-red-600 transition">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+90 549 477 80 38</span>
            </a>
            <a href="mailto:info@atalayservis.com" className="flex items-center gap-1 md:gap-2 hover:text-red-600 transition">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>info@atalayservis.com</span>
            </a>
          </div>
          <a
            href="https://wa.me/905494778038?text=Merhaba%20Atalay%20Servis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition font-semibold text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.547 4.256 1.582 6.126L0 24l6.126-1.582C7.744 23.453 9.852 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.872-.476-5.596-1.378l-.401-.206-4.159 1.074 1.074-4.159-.206-.401C1.476 15.872 1 13.956 1 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.289-7.984c-.289-.145-1.711-.844-1.976-.94-.265-.097-.458-.145-.651.145-.194.29-.744.94-.912 1.133-.168.194-.337.218-.626.073-.289-.145-1.22-.45-2.324-1.435-.86-.765-1.44-1.71-1.608-1.999-.168-.289-.018-.445.126-.589.129-.129.289-.337.434-.505.145-.168.193-.289.289-.482.097-.194.049-.361-.024-.505-.073-.145-.651-1.567-.893-2.145-.235-.562-.474-.486-.651-.495-.168-.008-.361-.008-.554-.008-.194 0-.505.072-.769.361-.265.289-1.01.987-1.01 2.41 0 1.424 1.034 2.796 1.178 2.986.145.19 2.04 3.114 4.94 4.364.69.298 1.228.476 1.648.609.691.222 1.32.19 1.817.115.555-.083 1.71-.699 1.95-1.373.24-.674.24-1.252.168-1.373-.072-.121-.265-.192-.554-.337z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gradient-to-r from-red-700 to-red-600 text-white py-0 sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo ve Şirket Adı */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-90 transition flex-shrink-0">
            <Logo />
            <div className="hidden sm:block">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">Atalay Servis</h1>
              <p className="text-xs md:text-sm text-red-100">Endüstriyel Mutfak Servisi</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-xl font-bold">Atalay</h1>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden lg:flex gap-8 xl:gap-10 items-center">
            <li><Link href="/" className="hover:text-red-100 transition font-semibold text-base">Ana Sayfa</Link></li>
            <li><Link href="/hizmetler" className="hover:text-red-100 transition font-semibold text-base">Hizmetler</Link></li>
            <li><Link href="/blog" className="hover:text-red-100 transition font-semibold text-base">Blog</Link></li>
            <li><Link href="/iletisim" className="hover:text-red-100 transition font-semibold text-base">İletişim</Link></li>

            {/* CTA Button */}
            <li>
              <Link
                href="/iletisim"
                className="bg-white text-red-700 hover:bg-red-50 px-6 py-2 rounded-lg font-bold transition shadow-md text-base"
              >
                Hemen Ara
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-red-800 transition"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-red-800 border-t border-red-700">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
              <Link
                href="/"
                className="block py-2 px-3 hover:bg-red-700 rounded-lg transition font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hizmetler"
                className="block py-2 px-3 hover:bg-red-700 rounded-lg transition font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link
                href="/blog"
                className="block py-2 px-3 hover:bg-red-700 rounded-lg transition font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/iletisim"
                className="block py-2 px-3 hover:bg-red-700 rounded-lg transition font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link
                href="/iletisim"
                className="block w-full bg-white text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg font-bold transition text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hemen Ara
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed WhatsApp Button */}
      <a
        href="https://wa.me/905494778038?text=Merhaba%20Atalay%20Servis"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-0 left-0 right-0 bg-green-600 hover:bg-green-700 text-white py-4 px-4 flex items-center justify-center gap-3 font-bold text-lg shadow-2xl z-40 transition"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.547 4.256 1.582 6.126L0 24l6.126-1.582C7.744 23.453 9.852 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.872-.476-5.596-1.378l-.401-.206-4.159 1.074 1.074-4.159-.206-.401C1.476 15.872 1 13.956 1 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.289-7.984c-.289-.145-1.711-.844-1.976-.94-.265-.097-.458-.145-.651.145-.194.29-.744.94-.912 1.133-.168.194-.337.218-.626.073-.289-.145-1.22-.45-2.324-1.435-.86-.765-1.44-1.71-1.608-1.999-.168-.289-.018-.445.126-.589.129-.129.289-.337.434-.505.145-.168.193-.289.289-.482.097-.194.049-.361-.024-.505-.073-.145-.651-1.567-.893-2.145-.235-.562-.474-.486-.651-.495-.168-.008-.361-.008-.554-.008-.194 0-.505.072-.769.361-.265.289-1.01.987-1.01 2.41 0 1.424 1.034 2.796 1.178 2.986.145.19 2.04 3.114 4.94 4.364.69.298 1.228.476 1.648.609.691.222 1.32.19 1.817.115.555-.083 1.71-.699 1.95-1.373.24-.674.24-1.252.168-1.373-.072-.121-.265-.192-.554-.337z"/>
        </svg>
        <span>WhatsApp ile İletişim</span>
      </a>
    </>
  );
}

