import { type Assign, SegmentGroup } from '@ark-ui/solid'
import { type SegmentGroupVariantProps, segmentGroup } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export interface RootProps
  extends Assign<JsxStyleProps, SegmentGroup.RootProps>,
    SegmentGroupVariantProps {}
export const Root = withProvider<RootProps>(SegmentGroup.Root, 'root')

export const Indicator = withContext<Assign<JsxStyleProps, SegmentGroup.IndicatorProps>>(
  SegmentGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<Assign<JsxStyleProps, SegmentGroup.ItemControlProps>>(
  SegmentGroup.ItemControl,
  'itemControl',
)

export const Item = withContext<Assign<JsxStyleProps, SegmentGroup.ItemProps>>(
  SegmentGroup.Item,
  'item',
)

export const ItemText = withContext<Assign<JsxStyleProps, SegmentGroup.ItemTextProps>>(
  SegmentGroup.ItemText,
  'itemText',
)

export const Label = withContext<Assign<JsxStyleProps, SegmentGroup.LabelProps>>(
  SegmentGroup.Label,
  'label',
)

export {
  SegmentGroupContext as Context,
  type SegmentGroupContextProps as ContextProps,
} from '@ark-ui/solid'
