import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import viteTsconfig from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: { backgrounds: false, outline: false, actions: false },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [viteTsconfig({ root: '../' })],
    })
  },
}

export default config
