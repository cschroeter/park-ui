import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { build } from 'velite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
export default {
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  },
  experimental: {
    outputFileTracingIncludes: {
      '/*': ['../components/**/*', '../packages/panda/src/theme/recipes/**/*'],
    },
  },
  transpilePackages: ['shiki'],
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
