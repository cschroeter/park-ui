import { type Assign, Editable } from '@ark-ui/solid'
import { type EditableVariantProps, editable } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export interface RootProps
  extends Assign<JsxStyleProps, Editable.RootProps>,
    EditableVariantProps {}
export const Root = withProvider<RootProps>(Editable.Root, 'root')

export const Area = withContext<Assign<JsxStyleProps, Editable.AreaProps>>(Editable.Area, 'area')

export const CancelTrigger = withContext<Assign<JsxStyleProps, Editable.CancelTriggerProps>>(
  Editable.CancelTrigger,
  'cancelTrigger',
)

export const Control = withContext<Assign<JsxStyleProps, Editable.ControlProps>>(
  Editable.Control,
  'control',
)

export const EditTrigger = withContext<Assign<JsxStyleProps, Editable.EditTriggerProps>>(
  Editable.EditTrigger,
  'editTrigger',
)

export const Input = withContext<Assign<JsxStyleProps, Editable.InputProps>>(
  Editable.Input,
  'input',
)

export const Label = withContext<Assign<JsxStyleProps, Editable.LabelProps>>(
  Editable.Label,
  'label',
)

export const Preview = withContext<Assign<JsxStyleProps, Editable.PreviewProps>>(
  Editable.Preview,
  'preview',
)

export const SubmitTrigger = withContext<Assign<JsxStyleProps, Editable.SubmitTriggerProps>>(
  Editable.SubmitTrigger,
  'submitTrigger',
)

export {
  EditableContext as Context,
  type EditableContextProps as ContextProps,
} from '@ark-ui/solid'
