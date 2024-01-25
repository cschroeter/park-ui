import { Editable as ArkEditable } from '@ark-ui/react/editable'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'editable',
  slots: {
    root: 'editable__root',
    area: 'editable__area',
    label: 'editable__label',
    preview: 'editable__preview',
    input: 'editable__input',
    editTrigger: 'editable__editTrigger',
    submitTrigger: 'editable__submitTrigger',
    cancelTrigger: 'editable__cancelTrigger',
    control: 'editable__control',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Editable = withProvider(ArkEditable.Root, 'root')
const EditableArea = withContext(ArkEditable.Area, 'area')
const EditableCancelTrigger = withContext(ArkEditable.CancelTrigger, 'cancelTrigger')
const EditableControl = withContext(ArkEditable.Control, 'control')
const EditableEditTrigger = withContext(ArkEditable.EditTrigger, 'editTrigger')
const EditableInput = withContext(ArkEditable.Input, 'input')
const EditableLabel = withContext(ArkEditable.Label, 'label')
const EditablePreview = withContext(ArkEditable.Preview, 'preview')
const EditableSubmitTrigger = withContext(ArkEditable.SubmitTrigger, 'submitTrigger')

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
