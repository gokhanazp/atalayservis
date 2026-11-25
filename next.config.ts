import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers (static assets) için statik export
  output: "export",
  // Image optimization (statik export'ta Next görsel optimizasyonu çalışmaz)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  // Compression
  compress: true,
  // Generate ETags
  generateEtags: true,
  // Powering by header
  poweredByHeader: false,
  // Production source maps
  productionBrowserSourceMaps: false,
  // Not: non-www -> www yönlendirmesi artık Cloudflare Redirect Rule ile yapılıyor.
};

export default nextConfig;
