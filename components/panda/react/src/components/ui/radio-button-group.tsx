import type { Assign } from '@ark-ui/react'
import { RadioGroup } from '@ark-ui/react/radio-group'
import { type RadioGroupVariantProps, radioButtonGroup } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioButtonGroup)

export interface RootProps
  extends Assign<JsxStyleProps, RadioGroup.RootProps>,
    RadioGroupVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(RadioGroup.Root, 'root')

export interface IndicatorProps extends Assign<JsxStyleProps, RadioGroup.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(
  RadioGroup.Indicator,
  'indicator',
)

export interface ItemControlProps extends Assign<JsxStyleProps, RadioGroup.ItemControlProps> {}
export const ItemControl = withContext<HTMLDivElement, ItemControlProps>(
  RadioGroup.ItemControl,
  'itemControl',
)

export interface ItemProps extends Assign<JsxStyleProps, RadioGroup.ItemProps> {}
export const Item = withContext<HTMLLabelElement, ItemProps>(RadioGroup.Item, 'item')

export interface ItemTextProps extends Assign<JsxStyleProps, RadioGroup.ItemTextProps> {}
export const ItemText = withContext<HTMLSpanElement, ItemTextProps>(RadioGroup.ItemText, 'itemText')

export interface LabelProps extends Assign<JsxStyleProps, RadioGroup.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(RadioGroup.Label, 'label')

export {
  RadioGroupContext as Context,
  type RadioGroupContextProps as ContextProps,
} from '@ark-ui/react/radio-group'
