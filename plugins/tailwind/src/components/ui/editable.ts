import { Editable as ArkEditable } from '@ark-ui/react'
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

export const EditableRoot = withProvider(ArkEditable.Root, 'root')
export const EditableArea = withContext(ArkEditable.Area, 'area')
export const EditableCancelTrigger = withContext(ArkEditable.CancelTrigger, 'cancelTrigger')
export const EditableControl = withContext(ArkEditable.Control, 'control')
export const EditableEditTrigger = withContext(ArkEditable.EditTrigger, 'editTrigger')
export const EditableInput = withContext(ArkEditable.Input, 'input')
export const EditableLabel = withContext(ArkEditable.Label, 'label')
export const EditablePreview = withContext(ArkEditable.Preview, 'preview')
export const EditableSubmitTrigger = withContext(ArkEditable.SubmitTrigger, 'submitTrigger')

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
