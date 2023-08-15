// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.hbs/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'handlebars-loader',
        },
      ],
    })

    return config
  },
}

module.exports = withContentlayer(nextConfig)
