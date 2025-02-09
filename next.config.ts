import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   eslint: {
      dirs: ['src'],
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
            port: '',
            pathname: '/wikipedia/commons/thumb/**',
         },
      ],
   },
   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack'],
      });
      return config;
   },
};

export default nextConfig;
