import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupProps as ArkRadioGroupProps,
} from '@ark-ui/react/radio-group'
import { styled } from 'styled-system/jsx'
import { radioButtonGroup, type RadioButtonGroupVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/radio-group'

export type RadioButtonGroupProps = ArkRadioGroupProps & RadioButtonGroupVariantProps
export const RadioButtonGroup = styled(ArkRadioGroup, radioButtonGroup)
