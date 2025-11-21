import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@ark-ui/react'],
  },
  outputFileTracingIncludes: {
    '/*': ['../components/react/src/**/*'],
  },

  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: false,
      },
    ]
  },

  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/mdx/:path*',
      },
    ]
  },
}

export default async function config() {
  const isDev = process.argv.indexOf('dev') !== -1
  const isBuild = process.argv.indexOf('build') !== -1
  if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
    process.env.VELITE_STARTED = '1'
    const { build } = await import('velite')
    await build({ watch: isDev, clean: !isDev })
  }

  return nextConfig
}
