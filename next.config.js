/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '/sarathi',
  output: 'export',
  trailingSlash: true,
};

module.exports = nextConfig;
