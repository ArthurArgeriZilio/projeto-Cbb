/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  basePath: process.env.GITHUB_ACTIONS ? '/projeto-Cbb' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/projeto-Cbb/' : '',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig
