import { defineTokens } from '@pandacss/dev'

export const colors = defineTokens.colors({
  neutral: {
    25: { value: '#fdfdfd' },
  },
  stone: {
    25: { value: '#fcfcfc' },
  },
  zinc: {
    25: { value: '#fcfcfc' },
  },
  gray: {
    25: { value: '#fcfcfd' },
  },
  slate: {
    25: { value: '#fcfcfd' },
  },
  grayPalette: {
    25: { value: '{colors.neutral.25}' },
    50: { value: '{colors.neutral.50}' },
    100: { value: '{colors.neutral.100}' },
    200: { value: '{colors.neutral.200}' },
    300: { value: '{colors.neutral.300}' },
    400: { value: '{colors.neutral.400}' },
    500: { value: '{colors.neutral.500}' },
    600: { value: '{colors.neutral.600}' },
    700: { value: '{colors.neutral.700}' },
    800: { value: '{colors.neutral.800}' },
    900: { value: '{colors.neutral.900}' },
    950: { value: '{colors.neutral.950}' },
  },
})
