import { Clipboard } from '@ark-ui/react/clipboard'
import { clipboard } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(clipboard)

export interface RootProps extends Assign<JsxStyleProps, Clipboard.RootProps> {}
export const Root = withProvider<HTMLDivElement, RootProps>(Clipboard.Root, 'root')

export interface ControlProps extends Assign<JsxStyleProps, Clipboard.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(Clipboard.Control, 'control')

export interface IndicatorProps extends Assign<JsxStyleProps, Clipboard.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(
  Clipboard.Indicator,
  'indicator',
)

export interface InputProps extends Assign<JsxStyleProps, Clipboard.InputProps> {}
export const Input = withContext<HTMLInputElement, InputProps>(Clipboard.Input, 'input')

export interface LabelProps extends Assign<JsxStyleProps, Clipboard.LabelProps> {}
export const Label = withContext<HTMLDivElement, LabelProps>(Clipboard.Label, 'label')

export interface TriggerProps extends Assign<JsxStyleProps, Clipboard.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Clipboard.Trigger, 'trigger')

export {
  ClipboardContext as Context,
  type ClipboardContextProps as ContextProps,
} from '@ark-ui/react/clipboard'
