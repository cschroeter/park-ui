'use client'

import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'radioButtonGroup',
  defaultVariants: { size: 'md', variant: 'solid' },
  slots: {
    root: 'radioButtonGroup__root',
    label: 'radioButtonGroup__label',
    item: 'radioButtonGroup__item',
    itemText: 'radioButtonGroup__itemText',
    itemControl: 'radioButtonGroup__itemControl',
    indicator: 'radioButtonGroup__indicator',
  },
  variants: {
    variant: {
      solid: {
        root: 'radioButtonGroup__root--variant_solid',
        label: 'radioButtonGroup__label--variant_solid',
        item: 'radioButtonGroup__item--variant_solid',
        itemText: 'radioButtonGroup__itemText--variant_solid',
        itemControl: 'radioButtonGroup__itemControl--variant_solid',
        indicator: 'radioButtonGroup__indicator--variant_solid',
      },
      outline: {
        root: 'radioButtonGroup__root--variant_outline',
        label: 'radioButtonGroup__label--variant_outline',
        item: 'radioButtonGroup__item--variant_outline',
        itemText: 'radioButtonGroup__itemText--variant_outline',
        itemControl: 'radioButtonGroup__itemControl--variant_outline',
        indicator: 'radioButtonGroup__indicator--variant_outline',
      },
    },
    size: {
      sm: {
        root: 'radioButtonGroup__root--size_sm',
        label: 'radioButtonGroup__label--size_sm',
        item: 'radioButtonGroup__item--size_sm',
        itemText: 'radioButtonGroup__itemText--size_sm',
        itemControl: 'radioButtonGroup__itemControl--size_sm',
        indicator: 'radioButtonGroup__indicator--size_sm',
      },
      md: {
        root: 'radioButtonGroup__root--size_md',
        label: 'radioButtonGroup__label--size_md',
        item: 'radioButtonGroup__item--size_md',
        itemText: 'radioButtonGroup__itemText--size_md',
        itemControl: 'radioButtonGroup__itemControl--size_md',
        indicator: 'radioButtonGroup__indicator--size_md',
      },
      lg: {
        root: 'radioButtonGroup__root--size_lg',
        label: 'radioButtonGroup__label--size_lg',
        item: 'radioButtonGroup__item--size_lg',
        itemText: 'radioButtonGroup__itemText--size_lg',
        itemControl: 'radioButtonGroup__itemControl--size_lg',
        indicator: 'radioButtonGroup__indicator--size_lg',
      },
      xl: {
        root: 'radioButtonGroup__root--size_xl',
        label: 'radioButtonGroup__label--size_xl',
        item: 'radioButtonGroup__item--size_xl',
        itemText: 'radioButtonGroup__itemText--size_xl',
        itemControl: 'radioButtonGroup__itemControl--size_xl',
        indicator: 'radioButtonGroup__indicator--size_xl',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const RadioButtonGroup = withProvider(ArkRadioButtonGroup.Root, 'root')
const RadioButtonGroupIndicator = withContext(ArkRadioButtonGroup.Indicator, 'indicator')
const RadioButtonGroupItem = withContext(ArkRadioButtonGroup.Item, 'item')
const RadioButtonGroupItemControl = withContext(ArkRadioButtonGroup.ItemControl, 'itemControl')
const RadioButtonGroupItemText = withContext(ArkRadioButtonGroup.ItemText, 'itemText')
const RadioButtonGroupLabel = withContext(ArkRadioButtonGroup.Label, 'label')

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
