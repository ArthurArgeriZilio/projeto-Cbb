/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração condicional baseada na plataforma
  ...(process.env.GITHUB_ACTIONS && {
    output: 'export',
    trailingSlash: true,
    basePath: '/projeto-Cbb',
    assetPrefix: '/projeto-Cbb/',
  }),
  
  images: {
    unoptimized: process.env.GITHUB_ACTIONS ? true : false
  },
  
  // Configuração padrão para desenvolvimento e Vercel
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
}

module.exports = nextConfig
