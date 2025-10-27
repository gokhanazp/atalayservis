import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Atalay Servis | Endüstriyel Mutfak Ekipmanları Teknik Servis",
  description: "Atalay Servis - İstanbul'da endüstriyel mutfak ekipmanları (ocak, ızgara, fritöz, kuzine) teknik servis ve bakım hizmetleri. 24/7 hizmet.",
  authors: [{ name: "Atalay Servis" }],
  creator: "Atalay Servis",
  publisher: "Atalay Servis",
  icons: {
    icon: "/atalay-logo.png",
    shortcut: "/atalay-logo.png",
    apple: "/atalay-logo.png",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://atalayservisi.com",
    siteName: "Atalay Servis",
    title: "Atalay Servis | Endüstriyel Mutfak Ekipmanları Teknik Servis",
    description: "İstanbul'da endüstriyel mutfak ekipmanları teknik servis ve bakım hizmetleri",
    images: [
      {
        url: "https://atalayservisi.com/atalay-logo.png",
        width: 1200,
        height: 630,
        alt: "Atalay Servis - Endüstriyel Mutfak Ekipmanları Teknik Servis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atalay Servis | Endüstriyel Mutfak Ekipmanları Teknik Servis",
    description: "İstanbul'da endüstriyel mutfak ekipmanları teknik servis ve bakım hizmetleri",
    images: ["https://atalayservisi.com/atalay-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://atalayservisi.com",
  },
  verification: {
    google: "6dPHb0o7aS1O35bcrNtVq56_x5_AMR44EdY-WUuaYAU",
    // Bing verification kodu - Bing Webmaster Tools'tan alacaksınız
    // Örnek: "msvalidate.01=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    // Bunu eklemek için Bing Webmaster Tools'ta meta tag verification seçin
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Atalay Servis",
    "image": "https://atalayservis.com/atalay-logo.png",
    "description": "İstanbul'da endüstriyel mutfak ekipmanları profesyonel servis hizmetleri. Ocak, ızgara, fritöz ve kuzine servisi.",
    "telephone": "+905013001981",
    "email": "info@atalayservis.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "İstanbul",
      "addressCountry": "TR"
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.facebook.com/atalayservis",
      "https://www.instagram.com/atalayservis"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Atalay Servis",
    "url": "https://atalayservis.com",
    "logo": "https://atalayservis.com/atalay-logo.png",
    "description": "İstanbul'da endüstriyel mutfak ekipmanları profesyonel servis hizmetleri",
    "telephone": "+905013001981",
    "email": "info@atalayservis.com",
    "sameAs": [
      "https://www.facebook.com/atalayservis",
      "https://www.instagram.com/atalayservis"
    ]
  };

  return (
    <html lang="tr">
      <head>
        {/* Viewport ve charset */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema Markup - LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Schema Markup - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
