import { RadioGroup as ArkRadioGroup } from '@ark-ui/solid'
import { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

export const radioGroupStyles = tv({
  base: 'radioGroup',
  defaultVariants: {
    size: 'sm',
  },
  slots: {
    root: 'radioGroup__root',
    label: 'radioGroup__label',
    item: 'radioGroup__item',
    itemText: 'radioGroup__itemText',
    itemControl: 'radioGroup__itemControl',
    indicator: 'radioGroup__indicator',
  },
  variants: {
    size: {
      sm: {
        root: 'radioGroup__root--size_sm',
        label: 'radioGroup__label--size_sm',
        item: 'radioGroup__item--size_sm',
        itemText: 'radioGroup__itemText--size_sm',
        itemControl: 'radioGroup__itemControl--size_sm',
        indicator: 'radioGroup__indicator--size_sm',
      },
    },
  },
})

export type RadioGroupProps = ComponentProps<typeof ArkRadioGroup>

const { withProvider, withContext } = createStyleContext(radioGroupStyles)
const RadioGroupRoot = withProvider(ArkRadioGroup.Root, 'root')
const RadioGroupIndicator = withContext(ArkRadioGroup.Indicator, 'indicator')
const RadioGroupItem = withContext(ArkRadioGroup.Item, 'item')
const RadioGroupItemControl = withContext(ArkRadioGroup.ItemControl, 'itemControl')
const RadioGroupItemText = withContext(ArkRadioGroup.ItemText, 'itemText')
const RadioGroupLabel = withContext(ArkRadioGroup.Label, 'label')

export const RadioGroup = Object.assign(RadioGroupRoot, {
  Root: RadioGroupRoot,
  Indicator: RadioGroupIndicator,
  Item: RadioGroupItem,
  ItemControl: RadioGroupItemControl,
  ItemText: RadioGroupItemText,
  Label: RadioGroupLabel,
})
