import { type Assign, RadioGroup } from '@ark-ui/solid'
import { type RadioGroupVariantProps, radioGroup } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(radioGroup)

export interface RootProps
  extends Assign<JsxStyleProps, RadioGroup.RootProps>,
    RadioGroupVariantProps {}
export const Root = withProvider<RootProps>(RadioGroup.Root, 'root')

export const Indicator = withContext<Assign<JsxStyleProps, RadioGroup.IndicatorProps>>(
  RadioGroup.Indicator,
  'indicator',
)

export const ItemControl = withContext<Assign<JsxStyleProps, RadioGroup.ItemControlProps>>(
  RadioGroup.ItemControl,
  'itemControl',
)

export const Item = withContext<Assign<JsxStyleProps, RadioGroup.ItemProps>>(
  RadioGroup.Item,
  'item',
)

export const ItemText = withContext<Assign<JsxStyleProps, RadioGroup.ItemTextProps>>(
  RadioGroup.ItemText,
  'itemText',
)

export const Label = withContext<Assign<JsxStyleProps, RadioGroup.LabelProps>>(
  RadioGroup.Label,
  'label',
)

export {
  RadioGroupContext as Context,
  type RadioGroupContextProps as ContextProps,
} from '@ark-ui/solid'
