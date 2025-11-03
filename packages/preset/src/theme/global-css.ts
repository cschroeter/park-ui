export const globalCss = {
  extend: {
    html: {
      '--global-color-border': 'colors.border',
      '--global-color-focus-ring': 'colors.colorPalette.solid.bg',
      '--global-color-placeholder': 'colors.fg.subtle',
      '--global-color-selection': 'colors.colorPalette.subtle.bg',
      colorPalette: 'gray',
    },
    body: {
      background: 'gray.1',
      color: 'fg.default',
    },
  },
}
