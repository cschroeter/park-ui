import type { StorybookConfig } from 'storybook-solidjs-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, outline: false, actions: false },
    },
  ],
  framework: {
    name: 'storybook-solidjs-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths({ root: './' })],
    })
  },
}

export default config
