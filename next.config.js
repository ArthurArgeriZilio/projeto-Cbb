/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath: process.env.GITHUB_ACTIONS ? '/projeto-Cbb' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/projeto-Cbb/' : '',
  images: {
    unoptimized: true
  },
  // Para GitHub Pages, desabilitar funcionalidades que precisam de servidor
  ...(process.env.GITHUB_ACTIONS && {
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
  }),
}

module.exports = nextConfig
