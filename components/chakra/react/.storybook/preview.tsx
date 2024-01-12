import type { Preview } from '@storybook/react'
import { ThemeProvider } from './theme-provider'
import React from 'react'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider colorMode={context.globals.isDarkMode ? 'dark' : 'light'}>
        <Story />
      </ThemeProvider>
    ),
  ],
  globalTypes: {
    isDarkMode: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
    },
  },
}

export default preview
