import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [{
      hostname: 'assets.aceternity.com',
    }]
  }
};