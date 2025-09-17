/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    'http://192.168.5.220:3000',
    'http://192.168.5.220:3000', // IP de desarrollo
    'http://API_URL', 
    'https://surf-build-back.vercel.app'
        // opcional, localhost
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.viewsurf.com',
      },
      {
        protocol: 'https',
        hostname: 'www.windy.com',
      },
      {
      protocol: 'https',
      hostname: 'images-webcams.windy.com',
    },
    ],
  },
};

module.exports = nextConfig;
