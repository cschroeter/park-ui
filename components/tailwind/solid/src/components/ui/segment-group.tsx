import { SegmentGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const segmentGroup = tv(
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
const { withProvider, withContext } = createStyleContext(segmentGroup)

export interface RootProps extends SegmentGroup.RootProps, VariantProps<typeof segmentGroup> {}
export const Root = withProvider<RootProps>(SegmentGroup.Root, 'root')

export const Indicator = withContext<SegmentGroup.IndicatorProps>(
  SegmentGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<SegmentGroup.ItemControlProps>(
  SegmentGroup.ItemControl,
  'itemControl',
)

export const Item = withContext<SegmentGroup.ItemProps>(SegmentGroup.Item, 'item')

export const ItemText = withContext<SegmentGroup.ItemTextProps>(SegmentGroup.ItemText, 'itemText')

export const Label = withContext<SegmentGroup.LabelProps>(SegmentGroup.Label, 'label')

export {
  SegmentGroupContext as Context,
  type SegmentGroupContextProps as ContextProps,
} from '@ark-ui/react'
