/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "cdn.sanity.io"],
  },
};

module.exports = withFonts({
  ...nextConfig,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts",
          publicPath: "/_next/static/fonts",
        },
      },
    });

    return config;
  },
});
