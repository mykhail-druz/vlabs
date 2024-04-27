/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['res.cloudinary.com', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
      },
    ],
  },
}

export default nextConfig
