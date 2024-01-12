import { Editable as ArkEditable } from '@ark-ui/react/editable'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Editable')

const Editable = withProvider(chakra(ArkEditable.Root), 'root')
const EditableArea = withContext(chakra(ArkEditable.Area), 'area')
const EditableCancelTrigger = withContext(chakra(ArkEditable.CancelTrigger), 'cancelTrigger')
const EditableControl = withContext(chakra(ArkEditable.Control), 'control')
const EditableEditTrigger = withContext(chakra(ArkEditable.EditTrigger), 'editTrigger')
const EditableInput = withContext(chakra(ArkEditable.Input), 'input')
const EditableLabel = withContext(chakra(ArkEditable.Label), 'label')
const EditablePreview = withContext(chakra(ArkEditable.Preview), 'preview')
const EditableSubmitTrigger = withContext(chakra(ArkEditable.SubmitTrigger), 'submitTrigger')

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
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
  EditTrigger,
  Input,
  Label,
  Preview,
  Root,
  SubmitTrigger,
}

export interface EditableProps extends HTMLChakraProps<typeof Editable> {}
export interface EditableAreaProps extends HTMLChakraProps<typeof EditableArea> {}
export interface EditableCancelTriggerProps extends HTMLChakraProps<typeof EditableCancelTrigger> {}
export interface EditableControlProps extends HTMLChakraProps<typeof EditableControl> {}
export interface EditableEditTriggerProps extends HTMLChakraProps<typeof EditableEditTrigger> {}
export interface EditableInputProps extends HTMLChakraProps<typeof EditableInput> {}
export interface EditableLabelProps extends HTMLChakraProps<typeof EditableLabel> {}
export interface EditablePreviewProps extends HTMLChakraProps<typeof EditablePreview> {}
export interface EditableSubmitTriggerProps extends HTMLChakraProps<typeof EditableSubmitTrigger> {}
