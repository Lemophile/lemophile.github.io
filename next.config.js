/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Désactiver l'optimisation des images pour l'export statique
    optimizePackageImports: ['framer-motion']
  }
};

module.exports = nextConfig;
