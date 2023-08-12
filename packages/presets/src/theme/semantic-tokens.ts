import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    bg: {
      canvas: { value: { base: '{colors.gray-palette.25}', _dark: '{colors.gray-palette.950}' } },
      default: { value: { base: '{colors.white}', _dark: '{colors.gray-palette.950}' } },
      subtle: { value: { base: '{colors.gray-palette.100}', _dark: '{colors.gray-palette.900}' } },
      muted: { value: { base: '{colors.gray-palette.200}', _dark: '{colors.gray-palette.800}' } },
      emphasized: {
        value: { base: '{colors.gray-palette.300}', _dark: '{colors.gray-palette.600}' },
      },
      disabled: {
        value: { base: '{colors.gray-palette.200}', _dark: '{colors.gray-palette.700}' },
      },
    },
    fg: {
      default: { value: { base: '{colors.gray-palette.950}', _dark: '{colors.white}' } },
      emphasized: {
        value: { base: '{colors.gray-palette.700}', _dark: '{colors.gray-palette.200}' },
      },
      muted: { value: { base: '{colors.gray-palette.600}', _dark: '{colors.gray-palette.300}' } },
      subtle: { value: { base: '{colors.gray-palette.500}', _dark: '{colors.gray-palette.400}' } },
      disabled: {
        value: { base: '{colors.gray-palette.200}', _dark: '{colors.gray-palette.800}' },
      },
    },
    accent: {
      default: { value: { base: '{colors.gray-palette.950}', _dark: '{colors.white}' } },
      emphasized: {
        value: { base: '{colors.gray-palette.800}', _dark: '{colors.gray-palette.200}' },
      },
      fg: { value: { base: '{colors.white}', _dark: '{colors.gray-palette.950}' } },
    },

    border: {
      default: { value: { base: '{colors.gray-palette.200}', _dark: '{colors.gray-palette.800}' } },
      emphasized: {
        value: { base: '{colors.gray-palette.300}', _dark: '{colors.gray-palette.700}' },
      },
      outline: { value: { base: '{colors.gray-palette.600}', _dark: '{colors.gray-palette.400}' } },
      accent: { value: { base: '{colors.gray-palette.900}', _dark: '{colors.white}' } },
      disabled: {
        value: { base: '{colors.gray-palette.200}', _dark: '{colors.gray-palette.800}' },
      },
    },
  },
  shadows: {
    accent: {
      value: '0 0 0 1px {colors.border.accent}',
    },
    outline: {
      value: '0 0 0 1px {colors.border.outline}',
    },
    xs: {
      value: {
        base: '0px 1px 2px rgba(23, 23, 23,  0.1)',
        _dark: '0px 1px 2px rgba(0, 0, 0, 1.0)',
      },
    },
    sm: {
      value: {
        base: '0px 2px 4px rgba(23, 23, 23,  0.1)',
        _dark: '0px 2px 4px rgba(0, 0, 0, 1.0)',
      },
    },
    md: {
      value: {
        base: '0px 4px 8px rgba(23, 23, 23,  0.1)',
        _dark: '0px 4px 8px rgba(0, 0, 0, 1.0)',
      },
    },
    lg: {
      value: {
        base: '0px 8px 16px rgba(23, 23, 23,  0.1)',
        _dark: '0px 8px 16px rgba(0, 0, 0, 1.0)',
      },
    },
    xl: {
      value: {
        defaubaselt: '0px 16px 24px rgba(23, 23, 23,  0.1)',
        _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
      },
    },
  },
  radii: {
    none: { value: '0' },
    default: { value: '{radii.sm}' },
  },
})
