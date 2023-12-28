import { colors } from './colors'
import { shadows } from './shadows'

export const semanticTokens = {
  colors: {
    ...colors,
    'bg.default': { default: 'white', _dark: 'gray.2' },
    'bg.canvas': 'gray.1',
    'bg.subtle': 'gray.2',
    'bg.muted': { default: 'gray.3', _dark: 'gray.4' },
    'bg.emphasized': { default: 'gray.4', _dark: 'gray.5' },
    'bg.disabled': { default: 'gray.3', _dark: 'gray.4' },

    'fg.default': 'gray.12',
    'fg.muted': 'gray.11',
    'fg.subtle': 'gray.10',
    'fg.disabled': 'gray.7',

    'border.default': 'gray.7',
    'border.muted': 'gray.6',
    'border.subtle': 'gray.4',
    'border.disabled': 'gray.5',
    'border.outline': 'gray.a9',
  },
  shadows,
}
