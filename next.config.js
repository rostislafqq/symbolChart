/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ["www.otlichnye-tseny.ru", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
