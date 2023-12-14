import { RadioGroup as ArkRadioGroup } from '@ark-ui/react/radio-group'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
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

export interface RadioGroupProps extends HTMLStyledProps<typeof RadioGroup> {}
export interface RadioGroupIndicatorProps extends HTMLStyledProps<typeof RadioGroupIndicator> {}
export interface RadioGroupItemProps extends HTMLStyledProps<typeof RadioGroupItem> {}
export interface RadioGroupItemControlProps extends HTMLStyledProps<typeof RadioGroupItemControl> {}
export interface RadioGroupItemTextProps extends HTMLStyledProps<typeof RadioGroupItemText> {}
export interface RadioGroupLabelProps extends HTMLStyledProps<typeof RadioGroupLabel> {}
