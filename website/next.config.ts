import type { NextConfig } from 'next'

const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  import('velite').then((m) => m.build({ watch: isDev, clean: !isDev }))
}

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@ark-ui/react'],
  },
  outputFileTracingIncludes: {
    '/*': ['../components/react/src/examples/**/*'],
  },
}

export default nextConfig
