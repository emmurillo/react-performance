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

const withNextBundleAnalyzer =
  require('next-bundle-analyzer')(/* options come there */);
nextConfig = withNextBundleAnalyzer(nextConfig);


module.exports = nextConfig
