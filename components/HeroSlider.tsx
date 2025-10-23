'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: 'Atalay Servis - İstanbul\'da Güvenilir Teknik Destek',
      subtitle: 'Endüstriyel mutfak ekipmanlarınız için 24/7 profesyonel servis hizmetleri',
      image: '/img/slider-05.jpg',
    },
    {
      title: 'Ocak, Izgara, Fritöz ve Kuzine Servisi',
      subtitle: 'Tüm markaların ekipmanlarına hizmet veriyoruz',
      image: '/img/slider-2.jpeg',
    },
    {
      title: 'Hızlı, Güvenilir ve Profesyonel Hizmet',
      subtitle: 'Aynı gün müdahale garantisi ile İstanbul\'un her yerinde hizmet',
      image: '/img/slider-05.jpg',
    },
  ];

  return (
    <section className="relative h-64 sm:h-80 md:h-96 lg:h-screen overflow-hidden">
      <style>{`
        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }
        .hero-zoom {
          animation: zoomIn 5s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .fade-in-up-delay-1 {
          animation: fadeInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        .fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Background Image */}
      <div key={currentSlide} className="absolute inset-0 hero-zoom">
        <Image
          src={slides[currentSlide].image}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Slider Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          {/* Logo */}
          <div key={`logo-${currentSlide}`} className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex justify-center fade-in-up">
            <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 relative drop-shadow-2xl">
              <Image
                src="/atalay-logo.png"
                alt="Atalay Servis Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 key={`title-${currentSlide}`} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg fade-in-up-delay-1">
            {slides[currentSlide].title}
          </h1>
          <p key={`subtitle-${currentSlide}`} className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 drop-shadow-lg fade-in-up-delay-2">
            {slides[currentSlide].subtitle}
          </p>
          <Link
            href="/iletisim"
            className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold inline-block transition shadow-lg text-sm sm:text-base fade-in-up-delay-2"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition backdrop-blur-sm"
        aria-label="Önceki slide"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/30 hover:bg-white/50 text-white p-2 sm:p-3 rounded-full transition backdrop-blur-sm"
        aria-label="Sonraki slide"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Controls */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
              index === currentSlide ? 'bg-red-600' : 'bg-white/50'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

