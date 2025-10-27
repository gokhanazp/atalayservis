import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
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
  // Redirects - non-www to www
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'atalayservisi.com',
          },
        ],
        destination: 'https://www.atalayservisi.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
