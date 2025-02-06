import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export',
  // typescript: {
  //   ignoreBuildErrors: true
  // },
  images: {
    remotePatterns: [{
      hostname: 'skillicons.dev',
    }],
    dangerouslyAllowSVG: true,
  }
};

module.exports = nextConfig;