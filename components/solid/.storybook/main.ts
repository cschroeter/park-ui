import type { StorybookConfig } from 'storybook-solidjs-vite'

const config: StorybookConfig = {
  framework: 'storybook-solidjs-vite',
  stories: ['../src/examples/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  core: {
    disableTelemetry: true,
  },
}
export default config
