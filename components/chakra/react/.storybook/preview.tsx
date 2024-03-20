import { ChakraProvider } from '@chakra-ui/react'
import { createTheme } from '@park-ui/chakra-theme'
import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview, ReactRenderer } from '@storybook/react'
import React from 'react'

const theme = createTheme({ accentColor: 'amber', grayColor: 'sand', borderRadius: 'sm' })

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
  decorators: [
    withThemeByClassName<ReactRenderer>({
      defaultTheme: 'light',
      themes: {
        light: '',
        dark: 'dark',
      },
    }),
    (Story) => (
      <ChakraProvider theme={theme}>
        <Story />
      </ChakraProvider>
    ),
  ],
}

export default preview
