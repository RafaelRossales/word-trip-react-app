/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

module.exports = {
  reactStrictMode: true,
  future: {
      webpack5: true,
  },
  webpack: function (config, options) {
      config.experiments = {};
      return config;
  },
  }

// module.exports = nextConfig
