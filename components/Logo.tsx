/**
 * Logo Bileşeni
 * Atalay Servis resmi logosu
 * /public/atalay-logo.png dosyasından yüklenir
 */

import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center justify-center h-28 w-28 md:h-32 md:w-32 overflow-hidden hover:opacity-90 transition">
      <Image
        src="/atalay-logo.png"
        alt="Atalay Servis Logo"
        width={128}
        height={128}
        className="h-full w-full object-contain"
        priority
      />
    </div>
  );
}

