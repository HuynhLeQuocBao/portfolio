/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/**',
      },
      
    ],
    domains: ['68.183.186.10', 'ldnam-staging.selab.edu.vn'], // Add your hostname here
  },
};

export default nextConfig;