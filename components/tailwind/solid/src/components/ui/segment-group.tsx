import { SegmentGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
    base: 'segmentGroup',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'segmentGroup__root',
      label: 'segmentGroup__label',
      item: 'segmentGroup__item',
      itemText: 'segmentGroup__itemText',
      itemControl: 'segmentGroup__itemControl',
      indicator: 'segmentGroup__indicator',
    },
    variants: {
      size: {
        sm: {
          root: 'segmentGroup__root--size_sm',
          label: 'segmentGroup__label--size_sm',
          item: 'segmentGroup__item--size_sm',
          itemText: 'segmentGroup__itemText--size_sm',
          itemControl: 'segmentGroup__itemControl--size_sm',
          indicator: 'segmentGroup__indicator--size_sm',
        },
        md: {
          root: 'segmentGroup__root--size_md',
          label: 'segmentGroup__label--size_md',
          item: 'segmentGroup__item--size_md',
          itemText: 'segmentGroup__itemText--size_md',
          itemControl: 'segmentGroup__itemControl--size_md',
          indicator: 'segmentGroup__indicator--size_md',
        },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(SegmentGroup.Root, 'root')
export const Indicator = withContext(SegmentGroup.Indicator, 'indicator')
export const Item = withContext(SegmentGroup.Item, 'item')
export const ItemControl = withContext(SegmentGroup.ItemControl, 'itemControl')
export const ItemText = withContext(SegmentGroup.ItemText, 'itemText')
export const Label = withContext(SegmentGroup.Label, 'label')

export type RootProps = ComponentProps<typeof Root>
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemControlProps extends ComponentProps<typeof ItemControl> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
