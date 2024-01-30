import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { radioGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

export const RadioGroupRoot = withProvider(styled(ArkRadioGroup.Root), 'root')
export const RadioGroupIndicator = withContext(styled(ArkRadioGroup.Indicator), 'indicator')
export const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), 'item')
export const RadioGroupItemControl = withContext(styled(ArkRadioGroup.ItemControl), 'itemControl')
export const RadioGroupItemText = withContext(styled(ArkRadioGroup.ItemText), 'itemText')
export const RadioGroupLabel = withContext(styled(ArkRadioGroup.Label), 'label')

export const RadioGroup = {
  Root: RadioGroupRoot,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
}

export interface RadioGroupRootProps extends ComponentProps<typeof RadioGroupRoot> {}
export interface RadioGroupIndicatorProps extends ComponentProps<typeof RadioGroupIndicator> {}
export interface RadioGroupItemProps extends ComponentProps<typeof RadioGroupItem> {}
export interface RadioGroupItemControlProps extends ComponentProps<typeof RadioGroupItemControl> {}
export interface RadioGroupItemTextProps extends ComponentProps<typeof RadioGroupItemText> {}
export interface RadioGroupLabelProps extends ComponentProps<typeof RadioGroupLabel> {}
