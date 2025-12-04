import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/piwi' : '',
  assetPrefix: isProd ? 'https://lemophile.github.io/piwi/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
