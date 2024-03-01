const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'standalone',
  experimental: {
    nextScriptWorkers: true,
  },
}
module.exports = withBundleAnalyzer(nextConfig)
