import { RadioGroup as ArkRadioGroup } from '@ark-ui/react'
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

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
})

export type RadioGroupProps = typeof RadioGroupRoot
export type RadioGroupIndicatorProps = typeof RadioGroupIndicator
export type RadioGroupItemProps = typeof RadioGroupItem
export type RadioGroupItemControlProps = typeof RadioGroupItemControl
export type RadioGroupItemTextProps = typeof RadioGroupItemText
export type RadioGroupLabelProps = typeof RadioGroupLabel
