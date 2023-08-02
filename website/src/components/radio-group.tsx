import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupProps as ArkRadioGroupProps,
} from '@ark-ui/react/radio-group'
import { styled } from 'styled-system/jsx'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/radio-group'

export type RadioGroupProps = RadioGroupVariantProps & ArkRadioGroupProps
export const RadioGroup = styled(ArkRadioGroup, radioGroup)
