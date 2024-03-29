/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // load worker files as a urls by using Asset Modules
    // https://webpack.js.org/guides/asset-modules/
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      type: "asset/resource",
      generator: {
        filename: "static/worker/[hash][ext][query]"
      }
    });

    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  // images: {
  //   formats: ['image/webp'],
  // },
  images: {
    images: {
      hostname: ['ik.imagekit.io'],
    },
  },
}

module.exports = nextConfig
