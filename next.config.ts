import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ganti 'export' menjadi 'standalone'
  output: "standalone",

  // Properti ini TIDAK diperlukan lagi di mode standalone
  // trailingSlash: true,
  // assetPrefix: "",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cews.bmkg.go.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dataweb.bmkg.go.id",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
