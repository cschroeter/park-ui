import {
  RadioGroup as ArkRadioGroup,
  type RadioGroupProps as ArkRadioGroupProps,
} from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

export type RadioGroupProps = ArkRadioGroupProps & RadioGroupVariantProps

const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), 'root')
export const RadioGroupIndicator = withContext(styled(ArkRadioGroup.Indicator), 'indicator')
export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), 'item')
export const RadioGroupItemControl = withContext(styled(ArkRadioGroup.ItemControl), 'itemControl')
export const RadioGroupItemText = withContext(styled(ArkRadioGroup.ItemText), 'itemText')
export const RadioGroupLabel = withContext(styled(ArkRadioGroup.Label), 'label')

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
})
