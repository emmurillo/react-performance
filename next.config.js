/** @type {import('next').NextConfig} */
let nextConfig = {
  output: 'standalone',
}

const withNextBundleAnalyzer =
  require('next-bundle-analyzer')(/* options come there */);
nextConfig = withNextBundleAnalyzer(nextConfig);


module.exports = nextConfig
