/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Desabilita funcionalidades do servidor para GitHub Pages
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Configuração para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/projeto-Cbb' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/projeto-Cbb/' : '',
}

module.exports = nextConfig
