import { dirname, join } from 'node:path'
import type { StorybookConfig } from 'storybook-solidjs-vite'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/examples/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: getAbsolutePath('storybook-solidjs-vite'),
    options: {},
  },
}
export default config
