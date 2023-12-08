import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { radioButtonGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

const RadioButtonGroup = withProvider(styled(ArkRadioButtonGroup.Root), 'root')
const RadioButtonGroupIndicator = withContext(styled(ArkRadioButtonGroup.Indicator), 'indicator')
const RadioButtonGroupItem = withContext(styled(ArkRadioButtonGroup.Item), 'item')
const RadioButtonGroupItemControl = withContext(
  styled(ArkRadioButtonGroup.ItemControl),
  'itemControl',
)
const RadioButtonGroupItemText = withContext(styled(ArkRadioButtonGroup.ItemText), 'itemText')
const RadioButtonGroupLabel = withContext(styled(ArkRadioButtonGroup.Label), 'label')

const Root = RadioButtonGroup
const Indicator = RadioButtonGroupIndicator
const Item = RadioButtonGroupItem
const ItemControl = RadioButtonGroupItemControl
const ItemText = RadioButtonGroupItemText
const Label = RadioButtonGroupLabel

export {
  Indicator,
  Item,
  ItemControl,
  ItemText,
  Label,
  RadioButtonGroup,
  RadioButtonGroupIndicator,
  RadioButtonGroupItem,
  RadioButtonGroupItemControl,
  RadioButtonGroupItemText,
  RadioButtonGroupLabel,
  Root,
}

export interface RadioButtonGroupProps extends HTMLStyledProps<typeof RadioButtonGroup> {}
export interface RadioButtonGroupIndicatorProps
  extends HTMLStyledProps<typeof RadioButtonGroupIndicator> {}
export interface RadioButtonGroupItemProps extends HTMLStyledProps<typeof RadioButtonGroupItem> {}
export interface RadioButtonGroupItemControlProps
  extends HTMLStyledProps<typeof RadioButtonGroupItemControl> {}
export interface RadioButtonGroupItemTextProps
  extends HTMLStyledProps<typeof RadioButtonGroupItemText> {}
export interface RadioButtonGroupLabelProps extends HTMLStyledProps<typeof RadioButtonGroupLabel> {}
