/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.hashnode.com", "avatars.githubusercontent.com"],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
