import { RadioGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(RadioGroup.Root, 'root')
export const Indicator = withContext(RadioGroup.Indicator, 'indicator')
export const Item = withContext(RadioGroup.Item, 'item')
export const ItemControl = withContext(RadioGroup.ItemControl, 'itemControl')
export const ItemText = withContext(RadioGroup.ItemText, 'itemText')
export const Label = withContext(RadioGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemControlProps extends ComponentProps<typeof ItemControl> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
