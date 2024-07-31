import { type Assign, SegmentGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, SegmentGroup.RootProviderBaseProps>,
    SegmentGroupVariantProps
  >
>(SegmentGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, SegmentGroup.RootBaseProps>, SegmentGroupVariantProps>
>(SegmentGroup.Root, 'root')

export const Indicator = withContext<
  Assign<HTMLStyledProps<'div'>, SegmentGroup.IndicatorBaseProps>
>(SegmentGroup.Indicator, 'indicator')

export const ItemControl = withContext<
  Assign<HTMLStyledProps<'div'>, SegmentGroup.ItemControlBaseProps>
>(SegmentGroup.ItemControl, 'itemControl')

export const Item = withContext<Assign<HTMLStyledProps<'label'>, SegmentGroup.ItemBaseProps>>(
  SegmentGroup.Item,
  'item',
)

export const ItemText = withContext<
  Assign<HTMLStyledProps<'span'>, SegmentGroup.ItemTextBaseProps>
>(SegmentGroup.ItemText, 'itemText')

export const Label = withContext<Assign<HTMLStyledProps<'label'>, SegmentGroup.LabelBaseProps>>(
  SegmentGroup.Label,
  'label',
)

export {
  SegmentGroupContext as Context,
  SegmentGroupItemHiddenInput as ItemHiddenInput,
} from '@ark-ui/solid'
