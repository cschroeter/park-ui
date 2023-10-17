import * as Ark from '@ark-ui/react/editable'
import { createStyleContext } from '~/lib/create-style-context'
import { editableStyles } from './recipe'
export * from '@ark-ui/react/editable'

export type EditableProps = React.ComponentProps<typeof Editable>

const { withProvider, withContext } = createStyleContext(editableStyles)

const EditableRoot = withProvider(Ark.Editable.Root, 'root')
export const EditableArea = withContext(Ark.Editable.Area, 'area')
export const EditableCancelTrigger = withContext(Ark.Editable.CancelTrigger, 'cancelTrigger')
export const EditableControl = withContext(Ark.Editable.Control, 'control')
export const EditableEditTrigger = withContext(Ark.Editable.EditTrigger, 'editTrigger')
export const EditableInput = withContext(Ark.Editable.Input, 'input')
export const EditableLabel = withContext(Ark.Editable.Label, 'label')
export const EditablePreview = withContext(Ark.Editable.Preview, 'preview')
export const EditableSubmitTrigger = withContext(Ark.Editable.SubmitTrigger, 'submitTrigger')

export const Editable = Object.assign(EditableRoot, {
  Root: EditableRoot,
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Label: EditableLabel,
  Preview: EditablePreview,
  SubmitTrigger: EditableSubmitTrigger,
})
