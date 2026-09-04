/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/sgnl',
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
