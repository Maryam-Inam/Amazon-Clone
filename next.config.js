/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "fakestoreapi.com",
      "i.dummyjson.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
