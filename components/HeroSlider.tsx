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
    },
    {
      title: 'Ocak, Izgara, Fritöz ve Kuzine Servisi',
      subtitle: 'Tüm markaların ekipmanlarına hizmet veriyoruz',
    },
    {
      title: 'Hızlı, Güvenilir ve Profesyonel Hizmet',
      subtitle: 'Aynı gün müdahale garantisi ile İstanbul\'un her yerinde hizmet',
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
      `}</style>

      {/* Background Image */}
      <div key={currentSlide} className="absolute inset-0 hero-zoom">
        <Image
          src="/img/slider-05.jpg"
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
          <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12 flex justify-center">
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

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-8 drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
          <Link
            href="/iletisim"
            className="bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg font-bold inline-block transition shadow-lg text-sm sm:text-base"
          >
            Hemen İletişime Geçin
          </Link>
        </div>
      </div>

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

