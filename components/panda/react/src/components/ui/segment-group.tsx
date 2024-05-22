import type { Assign } from '@ark-ui/react'
import { SegmentGroup } from '@ark-ui/react/segment-group'
import { type SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export interface RootProps
  extends Assign<JsxStyleProps, SegmentGroup.RootProps>,
    SegmentGroupVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(SegmentGroup.Root, 'root')

export interface IndicatorProps extends Assign<JsxStyleProps, SegmentGroup.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(
  SegmentGroup.Indicator,
  'indicator',
)

export interface ItemControlProps extends Assign<JsxStyleProps, SegmentGroup.ItemControlProps> {}
export const ItemControl = withContext<HTMLDivElement, ItemControlProps>(
  SegmentGroup.ItemControl,
  'itemControl',
)

export interface ItemProps extends Assign<JsxStyleProps, SegmentGroup.ItemProps> {}
export const Item = withContext<HTMLLabelElement, ItemProps>(SegmentGroup.Item, 'item')

export interface ItemTextProps extends Assign<JsxStyleProps, SegmentGroup.ItemTextProps> {}
export const ItemText = withContext<HTMLSpanElement, ItemTextProps>(
  SegmentGroup.ItemText,
  'itemText',
)

export interface LabelProps extends Assign<JsxStyleProps, SegmentGroup.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(SegmentGroup.Label, 'label')

export {
  SegmentGroupContext as Context,
  type SegmentGroupContextProps as ContextProps,
} from '@ark-ui/react/segment-group'
