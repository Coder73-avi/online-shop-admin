/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      "online-shop-api001.herokuapp.com",
      "api.raeelaproduction.com",
    ],
  },
  env: {
    // URL: "http://localhost:4001",
    URL: "http://api.raeelaproduction.com",
  },
};
const withImages = require("next-images");
module.exports = withImages();
module.exports = nextConfig;
