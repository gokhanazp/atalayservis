'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Premium Contact Info */}
      <div className="hidden md:block bg-gray-900 text-white py-3 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-4">
          <div className="flex gap-8 items-center">
            <a href="tel:+905013001981" className="flex items-center gap-2 hover:text-red-400 transition group">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span className="font-light tracking-wide">+90 501 300 19 81</span>
            </a>
            <div className="w-px h-6 bg-gray-700"></div>
            <a href="mailto:info@atalayservis.com" className="flex items-center gap-2 hover:text-red-400 transition group">
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="font-light tracking-wide">info@atalayservis.com</span>
            </a>
          </div>
          <a
            href="https://wa.me/905013001981?text=Merhaba%20Atalay%20Servis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition font-semibold text-sm shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.547 4.256 1.582 6.126L0 24l6.126-1.582C7.744 23.453 9.852 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.872-.476-5.596-1.378l-.401-.206-4.159 1.074 1.074-4.159-.206-.401C1.476 15.872 1 13.956 1 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.289-7.984c-.289-.145-1.711-.844-1.976-.94-.265-.097-.458-.145-.651.145-.194.29-.744.94-.912 1.133-.168.194-.337.218-.626.073-.289-.145-1.22-.45-2.324-1.435-.86-.765-1.44-1.71-1.608-1.999-.168-.289-.018-.445.126-.589.129-.129.289-.337.434-.505.145-.168.193-.289.289-.482.097-.194.049-.361-.024-.505-.073-.145-.651-1.567-.893-2.145-.235-.562-.474-.486-.651-.495-.168-.008-.361-.008-.554-.008-.194 0-.505.072-.769.361-.265.289-1.01.987-1.01 2.41 0 1.424 1.034 2.796 1.178 2.986.145.19 2.04 3.114 4.94 4.364.69.298 1.228.476 1.648.609.691.222 1.32.19 1.817.115.555-.083 1.71-.699 1.95-1.373.24-.674.24-1.252.168-1.373-.072-.121-.265-.192-.554-.337z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Header - Premium Design with Red Background */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white sticky top-0 z-50 shadow-xl">
        <nav className="max-w-7xl mx-auto px-4 py-0 flex justify-between items-center">
          {/* Logo ve Şirket Adı */}
          <Link href="/" className="flex items-center gap-4 hover:opacity-90 transition flex-shrink-0">
            <Logo />
            <div className="hidden sm:block border-l border-red-400 pl-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Atalay Servis</h1>
              <p className="text-xs md:text-sm text-red-100 font-semibold tracking-wide">PROFESYONEL TAMIRCISI</p>
            </div>
            <div className="sm:hidden">
              <h1 className="text-2xl font-bold text-white">Atalay</h1>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden lg:flex gap-1 items-center">
            <li>
              <Link href="/" className="px-5 py-3 text-red-50 hover:text-white transition font-bold text-base tracking-wide relative group">
                Ana Sayfa
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="/hizmetler" className="px-5 py-3 text-red-50 hover:text-white transition font-bold text-base tracking-wide relative group">
                Hizmetler
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="/blog" className="px-5 py-3 text-red-50 hover:text-white transition font-bold text-base tracking-wide relative group">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link href="/sss" className="px-5 py-3 text-red-50 hover:text-white transition font-bold text-base tracking-wide relative group">
                SSS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            {/* CTA Button */}
            <li>
              <Link
                href="/iletisim"
                className="bg-white text-red-700 hover:bg-red-50 px-7 py-2.5 rounded transition font-bold text-base tracking-wide ml-4 shadow-lg hover:shadow-xl"
              >
                İletişim
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded hover:bg-red-700 transition"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="lg:hidden bg-red-700 border-t border-red-600">
            <div className="max-w-6xl mx-auto px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block py-3 px-4 text-red-50 hover:text-white hover:bg-red-600 rounded transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hizmetler"
                className="block py-3 px-4 text-red-50 hover:text-white hover:bg-red-600 rounded transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Hizmetler
              </Link>
              <Link
                href="/blog"
                className="block py-3 px-4 text-red-50 hover:text-white hover:bg-red-600 rounded transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/sss"
                className="block py-3 px-4 text-red-50 hover:text-white hover:bg-red-600 rounded transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                SSS
              </Link>
              <Link
                href="/iletisim"
                className="block py-3 px-4 text-red-50 hover:text-white hover:bg-red-600 rounded transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link
                href="/iletisim"
                className="block w-full bg-white text-red-700 hover:bg-red-50 px-4 py-3 rounded font-semibold text-center mt-4 shadow-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Fixed WhatsApp Button */}
      <a
        href="https://wa.me/905013001981?text=Merhaba%20Atalay%20Servis"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-0 left-0 right-0 bg-green-600 hover:bg-green-500 text-white py-4 px-4 flex items-center justify-center gap-3 font-semibold text-lg shadow-2xl z-40 transition"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.148.547 4.256 1.582 6.126L0 24l6.126-1.582C7.744 23.453 9.852 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.956 0-3.872-.476-5.596-1.378l-.401-.206-4.159 1.074 1.074-4.159-.206-.401C1.476 15.872 1 13.956 1 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.289-7.984c-.289-.145-1.711-.844-1.976-.94-.265-.097-.458-.145-.651.145-.194.29-.744.94-.912 1.133-.168.194-.337.218-.626.073-.289-.145-1.22-.45-2.324-1.435-.86-.765-1.44-1.71-1.608-1.999-.168-.289-.018-.445.126-.589.129-.129.289-.337.434-.505.145-.168.193-.289.289-.482.097-.194.049-.361-.024-.505-.073-.145-.651-1.567-.893-2.145-.235-.562-.474-.486-.651-.495-.168-.008-.361-.008-.554-.008-.194 0-.505.072-.769.361-.265.289-1.01.987-1.01 2.41 0 1.424 1.034 2.796 1.178 2.986.145.19 2.04 3.114 4.94 4.364.69.298 1.228.476 1.648.609.691.222 1.32.19 1.817.115.555-.083 1.71-.699 1.95-1.373.24-.674.24-1.252.168-1.373-.072-.121-.265-.192-.554-.337z"/>
        </svg>
        <span>WhatsApp ile İletişim</span>
      </a>
    </>
  );
}

