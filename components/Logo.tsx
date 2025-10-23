/**
 * Logo Bileşeni
 * Atalay Servis resmi logosu
 * /public/atalay-logo.png dosyasından yüklenir
 */

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center h-20 w-20 md:h-24 md:w-24 overflow-hidden hover:opacity-90 transition">
      <Image
        src="/atalay-logo.png"
        alt="Atalay Servis Logo"
        width={96}
        height={96}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}

