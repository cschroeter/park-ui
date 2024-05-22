import type { Assign } from '@ark-ui/react'
import { Editable } from '@ark-ui/react/editable'
import { type EditableVariantProps, editable } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export interface RootProps
  extends Assign<JsxStyleProps, Editable.RootProps>,
    EditableVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Editable.Root, 'root')

export interface AreaProps extends Assign<JsxStyleProps, Editable.AreaProps> {}
export const Area = withContext<HTMLDivElement, AreaProps>(Editable.Area, 'area')

export interface CancelTriggerProps extends Assign<JsxStyleProps, Editable.CancelTriggerProps> {}
export const CancelTrigger = withContext<HTMLButtonElement, CancelTriggerProps>(
  Editable.CancelTrigger,
  'cancelTrigger',
)

export interface ControlProps extends Assign<JsxStyleProps, Editable.ControlProps> {}
export const Control = withContext<HTMLDivElement, ControlProps>(Editable.Control, 'control')

export interface EditTriggerProps extends Assign<JsxStyleProps, Editable.EditTriggerProps> {}
export const EditTrigger = withContext<HTMLButtonElement, EditTriggerProps>(
  Editable.EditTrigger,
  'editTrigger',
)

export interface InputProps extends Assign<JsxStyleProps, Editable.InputProps> {}
export const Input = withContext<HTMLInputElement, InputProps>(Editable.Input, 'input')

export interface LabelProps extends Assign<JsxStyleProps, Editable.LabelProps> {}
export const Label = withContext<HTMLLabelElement, LabelProps>(Editable.Label, 'label')

export interface PreviewProps extends Assign<JsxStyleProps, Editable.PreviewProps> {}
export const Preview = withContext<HTMLSpanElement, PreviewProps>(Editable.Preview, 'preview')

export interface SubmitTriggerProps extends Assign<JsxStyleProps, Editable.SubmitTriggerProps> {}
export const SubmitTrigger = withContext<HTMLButtonElement, SubmitTriggerProps>(
  Editable.SubmitTrigger,
  'submitTrigger',
)

export {
  EditableContext as Context,
  type EditableContextProps as ContextProps,
} from '@ark-ui/react/editable'
