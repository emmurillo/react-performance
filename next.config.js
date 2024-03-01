const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'standalone',
  compress: false,
  optimizeFonts: false,
  webpack(webpackConfig) {
    return {
      ...webpackConfig,
      optimization: {
        minimize: false
      }
    };
  }
}
module.exports = withBundleAnalyzer(nextConfig)
