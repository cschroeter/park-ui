import {
  NumberInput as ArkNumberInput,
  type NumberInputProps as ArkNumberInputProps,
} from '@ark-ui/react/number-input'
import { styled } from 'styled-system/jsx'
import { numberInput, type NumberInputVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/number-input'

export type NumberInputProps = NumberInputVariantProps & ArkNumberInputProps
export const NumberInput = styled(ArkNumberInput, numberInput)
