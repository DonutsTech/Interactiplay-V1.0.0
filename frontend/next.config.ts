import type { NextConfig } from 'next';



const nextConfig: NextConfig = {

  sassOptions: {
    additionalData: `@use '@/styles/_variables' as *;`,
  },
  
  compress: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'interacti-uploads.s3.us-east-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
