import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  keywords: "atalay servis, ocak servisi, ızgara servisi, fritöz servisi, kuzine servisi, endüstriyel mutfak, İstanbul",
  authors: [{ name: "Atalay Servis" }],
  creator: "Atalay Servis",
  publisher: "Atalay Servis",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://atalayservis.com",
    siteName: "Atalay Servis",
    title: "Atalay Servis | Endüstriyel Mutfak Ekipmanları Teknik Servis",
    description: "İstanbul'da endüstriyel mutfak ekipmanları teknik servis ve bakım hizmetleri",
    images: [
      {
        url: "https://atalayservis.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atalay Servis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atalay Servis | Endüstriyel Mutfak Ekipmanları Teknik Servis",
    description: "İstanbul'da endüstriyel mutfak ekipmanları teknik servis ve bakım hizmetleri",
    images: ["https://atalayservis.com/og-image.jpg"],
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
    canonical: "https://atalayservis.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
