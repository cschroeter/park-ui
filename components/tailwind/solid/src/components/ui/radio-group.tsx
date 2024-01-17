import { RadioGroup as ArkRadioGroup } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'radioGroup',
  defaultVariants: { size: 'md' },
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
      md: {
        root: 'radioGroup__root--size_md',
        label: 'radioGroup__label--size_md',
        item: 'radioGroup__item--size_md',
        itemText: 'radioGroup__itemText--size_md',
        itemControl: 'radioGroup__itemControl--size_md',
        indicator: 'radioGroup__indicator--size_md',
      },
      lg: {
        root: 'radioGroup__root--size_lg',
        label: 'radioGroup__label--size_lg',
        item: 'radioGroup__item--size_lg',
        itemText: 'radioGroup__itemText--size_lg',
        itemControl: 'radioGroup__itemControl--size_lg',
        indicator: 'radioGroup__indicator--size_lg',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const RadioGroup = withProvider(ArkRadioGroup.Root, 'root')
const RadioGroupIndicator = withContext(ArkRadioGroup.Indicator, 'indicator')
const RadioGroupItem = withContext(ArkRadioGroup.Item, 'item')
const RadioGroupItemControl = withContext(ArkRadioGroup.ItemControl, 'itemControl')
const RadioGroupItemText = withContext(ArkRadioGroup.ItemText, 'itemText')
const RadioGroupLabel = withContext(ArkRadioGroup.Label, 'label')

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
