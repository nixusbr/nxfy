/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
