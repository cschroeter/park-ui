import { RadioGroup as ArkRadioGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { radioGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

const RadioGroup = withProvider(styled(ArkRadioGroup.Root), 'root')
const RadioGroupIndicator = withContext(styled(ArkRadioGroup.Indicator), 'indicator')
const RadioGroupItem = withContext(styled(ArkRadioGroup.Item), 'item')
const RadioGroupItemControl = withContext(styled(ArkRadioGroup.ItemControl), 'itemControl')
const RadioGroupItemText = withContext(styled(ArkRadioGroup.ItemText), 'itemText')
const RadioGroupLabel = withContext(styled(ArkRadioGroup.Label), 'label')

const Root = RadioGroup
const Indicator = RadioGroupIndicator
const Item = RadioGroupItem
const ItemControl = RadioGroupItemControl
const ItemText = RadioGroupItemText
const Label = RadioGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioGroup,
  RadioGroupIndicator,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemText,
  RadioGroupLabel,
  Root,
}

export interface RadioGroupProps extends ComponentProps<typeof RadioGroup> {}
export interface RadioGroupIndicatorProps extends ComponentProps<typeof RadioGroupIndicator> {}
export interface RadioGroupItemProps extends ComponentProps<typeof RadioGroupItem> {}
export interface RadioGroupItemControlProps extends ComponentProps<typeof RadioGroupItemControl> {}
export interface RadioGroupItemTextProps extends ComponentProps<typeof RadioGroupItemText> {}
export interface RadioGroupLabelProps extends ComponentProps<typeof RadioGroupLabel> {}
