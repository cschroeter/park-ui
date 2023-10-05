import { defineSemanticTokens } from '@pandacss/dev'
import { colors } from './colors'

export const semanticTokens = defineSemanticTokens({
  colors: {
    ...colors,
    bg: {
      canvas: { value: '{colors.gray.1}' },
      default: { value: { base: '{colors.white}', _dark: '{colors.gray.2}' } },
      subtle: { value: '{colors.gray.2}' },
      muted: { value: '{colors.gray.4}' },
      emphasized: { value: '{colors.gray.4}' },
      disabled: { value: '{colors.gray.3}' },
    },
    fg: {
      default: { value: '{colors.gray.12}' },
      emphasized: { value: '{colors.gray.12}' },
      muted: { value: '{colors.gray.11}' },
      subtle: { value: '{colors.gray.10}' },
      disabled: { value: '{colors.gray.7}' },
    },
    accent: {
      default: { value: '{colors.gray.12}' }, // colors.gray.12
      emphasized: { value: '{colors.gray.12}' }, // colors.gray11.5
      fg: { value: 'white' },
    },
    border: {
      default: { value: '{colors.gray.6}' },
      emphasized: { value: '{colors.gray.7}' },
      muted: { value: '{colors.gray.3}' },
      accent: { value: '{colors.iris.9}' },
      disabled: { value: '{colors.gray.6}' },
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
        base: '0px 16px 24px rgba(23, 23, 23,  0.1)',
        _dark: '0px 16px 24px rgba(0, 0, 0, 1.0)',
      },
    },
  },
  radii: {
    l1: { value: '{radii.xs}' },
    l2: { value: '{radii.sm}' },
    l3: { value: '{radii.md}' },
  },
})
