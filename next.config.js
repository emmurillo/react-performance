/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    nextScriptWorkers: true,
  },
}

module.exports = nextConfig
