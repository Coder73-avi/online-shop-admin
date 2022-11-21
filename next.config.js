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
    URL: "https://api.raeelaproduction.com",
  },
};

const withVideos = require("next-videos");

module.exports = withVideos({
  assetPrefix: ["http://localhost", "http://api.raeelaproduction.com"],
  basePath: ".",

  webpack(config, options) {
    return config;
  },
});
module.exports = nextConfig;
