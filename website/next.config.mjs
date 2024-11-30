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
      '../packages/panda/src/theme/recipes/*',
    ],
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
