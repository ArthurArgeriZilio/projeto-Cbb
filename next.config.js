/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'docs',
  basePath: '/projeto-Cbb',
  assetPrefix: '/projeto-Cbb/',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
