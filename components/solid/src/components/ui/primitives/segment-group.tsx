import { SegmentGroup, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, SegmentGroup.RootProviderProps>, SegmentGroupVariantProps>
>(SegmentGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, SegmentGroup.RootProps>, SegmentGroupVariantProps>
>(SegmentGroup.Root, 'root')

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, SegmentGroup.IndicatorProps>>(
  SegmentGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<
  Assign<HTMLStyledProps<'div'>, SegmentGroup.ItemControlProps>
>(SegmentGroup.ItemControl, 'itemControl')

export const Item = withContext<Assign<HTMLStyledProps<'label'>, SegmentGroup.ItemProps>>(
  SegmentGroup.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, SegmentGroup.ItemTextProps>>(
  SegmentGroup.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, SegmentGroup.LabelProps>>(
  SegmentGroup.Label,
  'label',
)

export {
  SegmentGroupContext as Context,
  SegmentGroupItemHiddenInput as ItemHiddenInput,
} from '@ark-ui/solid'
