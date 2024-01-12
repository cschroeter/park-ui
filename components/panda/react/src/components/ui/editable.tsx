import { Editable as ArkEditable } from '@ark-ui/react/editable'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
import { editable } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

const Editable = withProvider(styled(ArkEditable.Root), 'root')
const EditableArea = withContext(styled(ArkEditable.Area), 'area')
const EditableCancelTrigger = withContext(styled(ArkEditable.CancelTrigger), 'cancelTrigger')
const EditableControl = withContext(styled(ArkEditable.Control), 'control')
const EditableEditTrigger = withContext(styled(ArkEditable.EditTrigger), 'editTrigger')
const EditableInput = withContext(styled(ArkEditable.Input), 'input')
const EditableLabel = withContext(styled(ArkEditable.Label), 'label')
const EditablePreview = withContext(styled(ArkEditable.Preview), 'preview')
const EditableSubmitTrigger = withContext(styled(ArkEditable.SubmitTrigger), 'submitTrigger')

const Root = Editable
const Area = EditableArea
const CancelTrigger = EditableCancelTrigger
const Control = EditableControl
const EditTrigger = EditableEditTrigger
const Input = EditableInput
const Label = EditableLabel
const Preview = EditablePreview
const SubmitTrigger = EditableSubmitTrigger

export {
  Area,
  CancelTrigger,
  Control,
  EditTrigger,
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
  Input,
  Label,
  Preview,
  Root,
  SubmitTrigger,
}

export interface EditableProps extends HTMLStyledProps<typeof Editable> {}
export interface EditableAreaProps extends HTMLStyledProps<typeof EditableArea> {}
export interface EditableCancelTriggerProps extends HTMLStyledProps<typeof EditableCancelTrigger> {}
export interface EditableControlProps extends HTMLStyledProps<typeof EditableControl> {}
export interface EditableEditTriggerProps extends HTMLStyledProps<typeof EditableEditTrigger> {}
export interface EditableInputProps extends HTMLStyledProps<typeof EditableInput> {}
export interface EditableLabelProps extends HTMLStyledProps<typeof EditableLabel> {}
export interface EditablePreviewProps extends HTMLStyledProps<typeof EditablePreview> {}
export interface EditableSubmitTriggerProps extends HTMLStyledProps<typeof EditableSubmitTrigger> {}
