/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/piwi' : '',
  assetPrefix: isProd ? '/piwi/' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Désactiver l'optimisation des images pour l'export statique
    optimizePackageImports: ['framer-motion']
  },
  // Désactiver le moteur Turbopack
  turbo: false
};

module.exports = nextConfig;
