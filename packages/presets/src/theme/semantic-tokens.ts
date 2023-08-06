import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    fg: {
      default: { value: { base: '{colors.neutral.950}', _dark: '{colors.white}' } },
      emphasized: { value: { base: '{colors.neutral.700}', _dark: '{colors.neutral.200}' } },
      muted: { value: { base: '{colors.neutral.600}', _dark: '{colors.neutral.300}' } },
      subtle: { value: { base: '{colors.neutral.500}', _dark: '{colors.neutral.400}' } },
      accent: { value: { base: '{colors.white}', _dark: '{colors.neutral.950}' } },
      disabled: { value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.800}' } },
    },
    bg: {
      canvas: { value: { base: '{colors.neutral.25}', _dark: '{colors.neutral.950}' } },
      default: { value: { base: '{colors.white}', _dark: '{colors.neutral.950}' } },
      subtle: { value: { base: '{colors.neutral.100}', _dark: '{colors.neutral.900}' } },
      muted: { value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.800}' } },
      emphasized: { value: { base: '{colors.neutral.300}', _dark: '{colors.neutral.700}' } },
      accent: { value: { base: '{colors.neutral.950}', _dark: '{colors.white}' } },
      disabled: { value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.800}' } },
    },
    border: {
      default: { value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.800}' } },
      emphasized: { value: { base: '{colors.neutral.300}', _dark: '{colors.neutral.700}' } },
      accent: { value: { base: '{colors.neutral.950}', _dark: '{colors.white}' } },
      disabled: { value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.800}' } },
    },
  },
  shadows: {
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
})
