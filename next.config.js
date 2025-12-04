/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '' : '',
  assetPrefix: isProd ? 'https://lemophile.github.io/' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    // Désactiver l'optimisation des images pour l'export statique
    optimizePackageImports: ['framer-motion'],
    // Désactiver le moteur Turbopack
    turbo: {
      resolveAlias: {}
    }
  }
};

module.exports = nextConfig;
