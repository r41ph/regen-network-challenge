/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
