import { build } from 'velite'

/** @type {import('next').NextConfig} */
export default {
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  transpilePackages: ['shiki'],
  async rewrites() {
    return [
      {
        source: '/_',
        destination: process.env.PARK_PLUS_URL,
      },
      {
        source: '/_/:path+',
        destination: `${process.env.PARK_PLUS_URL}/:path*`,
      },
    ]
  },
}

class VeliteWebpackPlugin {
  static started = false
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      this.options.watch = this.options.watch ?? dev
      this.options.clean = this.options.clean ?? !dev
      await build(this.options)
    })
  }
}
