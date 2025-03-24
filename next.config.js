/** @type {import('next').NextConfig} */

module.exports  = {
  experimental: {
      appDir: true,
  },
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  reactStrictMode: true,
  swcMinify: true
}