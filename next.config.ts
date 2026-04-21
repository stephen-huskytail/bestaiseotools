import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/ai-seo-tools-guide-2024',
        destination: '/blog/ai-seo-tools-guide-2026',
        permanent: true,
      },
      {
        source: '/blog/keyword-research-guide-2024',
        destination: '/blog/keyword-research-guide-2026',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
