import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    optimizePackageImports: ['@ark-ui/react'],
  },
  outputFileTracingIncludes: {
    '/*': ['../components/*/src/**/*', './public/**/*'],
  },
  output: 'standalone',

  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/introduction',
        permanent: false,
      },
    ]
  },
}

export default async function config() {
  if (process.env.VELITE_STARTED) {
    return nextConfig
  }

  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')

  const isDev = process.env.NODE_ENV === 'development'

  if (isDev) {
    console.log('Starting Velite in watch mode...')
    build({ watch: true })
  } else {
    await build({ clean: true })
  }

  return nextConfig
}
