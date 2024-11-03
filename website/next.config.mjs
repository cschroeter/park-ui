/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['shiki'],
  outputFileTracingIncludes: {
    '/*': ['../components/**/*', '../packages/panda/src/theme/recipes/**/*'],
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
