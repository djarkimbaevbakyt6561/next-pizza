import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   eslint: {
      dirs: ['src'],
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'media.dodostatic.net',
            port: '',
            pathname: '/image/**',
         },
         {
            protocol: 'https',
            hostname: 'cdn.dodostatic.net',
            port: '',
            pathname: '/static/Img/Ingredients/**',
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
