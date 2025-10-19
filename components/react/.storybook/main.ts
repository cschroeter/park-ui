import type { StorybookConfig } from 'storybook-react-rsbuild'

const config: StorybookConfig = {
  framework: 'storybook-react-rsbuild',
  stories: ['../src/examples/**/*.stories.tsx'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-themes'],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },
}

export default config
