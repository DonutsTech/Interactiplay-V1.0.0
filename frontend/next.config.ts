import type { NextConfig } from 'next';



const nextConfig: NextConfig = {

  sassOptions: {
    additionalData: `@use '@/styles/_variables' as *;`,
  },
  
  compress: true,
};

export default nextConfig;
