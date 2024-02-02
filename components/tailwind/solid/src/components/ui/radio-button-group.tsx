import { RadioGroup as ArkRadioButtonGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ArkRadioButtonGroup.Root, 'root')
export const Indicator = withContext(ArkRadioButtonGroup.Indicator, 'indicator')
export const Item = withContext(ArkRadioButtonGroup.Item, 'item')
export const ItemControl = withContext(ArkRadioButtonGroup.ItemControl, 'itemControl')
export const ItemText = withContext(ArkRadioButtonGroup.ItemText, 'itemText')
export const Label = withContext(ArkRadioButtonGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemControlProps extends ComponentProps<typeof ItemControl> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
