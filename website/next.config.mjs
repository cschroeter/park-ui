/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@ark-ui/react'],
  },
  outputFileTracingIncludes: {
    '/*': [
      '../components/react/src/demos/*',
      '../components/solid/src/demos/*',
      '../components/vue/src/demos/*',
      '../packages/preset/src/theme/recipes/*',
    ],
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/overview/introduction',
        permanent: false,
      },
      {
        source: '/:framework/docs/:slug*',
        destination: '/docs/:slug*',
        permanent: false,
      },
    ]
  },
}

const isDev = process.argv.indexOf('dev') !== -1
const isBuild = process.argv.indexOf('build') !== -1
if (!process.env.VELITE_STARTED && (isDev || isBuild)) {
  process.env.VELITE_STARTED = '1'
  const { build } = await import('velite')
  await build({ watch: isDev, clean: !isDev })
}

export default nextConfig
