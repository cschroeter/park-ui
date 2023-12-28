import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
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
  docs: {
    autodocs: 'tag',
  },
  viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
}
export default config
