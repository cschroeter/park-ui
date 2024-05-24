import { type Assign, Clipboard } from '@ark-ui/solid'
import { type ClipboardVariantProps, clipboard } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(clipboard)

export interface RootProps
  extends Assign<JsxStyleProps, Clipboard.RootProps>,
    ClipboardVariantProps {}
export const Root = withProvider<RootProps>(Clipboard.Root, 'root')

export const Control = withContext<Assign<JsxStyleProps, Clipboard.ControlProps>>(
  Clipboard.Control,
  'control',
)

export const Indicator = withContext<Assign<JsxStyleProps, Clipboard.IndicatorProps>>(
  Clipboard.Indicator,
  'indicator',
)

export const Input = withContext<Assign<JsxStyleProps, Clipboard.InputProps>>(
  Clipboard.Input,
  'input',
)

export const Label = withContext<Assign<JsxStyleProps, Clipboard.LabelProps>>(
  Clipboard.Label,
  'label',
)

export const Trigger = withContext<Assign<JsxStyleProps, Clipboard.TriggerProps>>(
  Clipboard.Trigger,
  'trigger',
)

export {
  ClipboardContext as Context,
  type ClipboardContextProps as ContextProps,
} from '@ark-ui/solid'
