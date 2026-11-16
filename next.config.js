/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'framer-motion'],
  },
  async rewrites() {
    return [
      // The standalone catalogue is a static document in /public. Serve it at
      // a clean URL; Next otherwise redirects the trailing slash and the
      // extension-less path does not resolve.
      {
        source: '/previews/aldane-voss',
        destination: '/previews/aldane-voss/index.html',
      },
    ]
  },
}

module.exports = nextConfig