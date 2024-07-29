import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react'
import './index.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    layout: 'padded',
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
    (Story) => Story(),
  ],
}

export default preview
