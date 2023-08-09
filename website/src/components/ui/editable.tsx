import * as Ark from '@ark-ui/react/editable'
import { styled } from 'styled-system/jsx'
import { editable, type EditableVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/editable'

const { withProvider, withContext } = createStyleContext(editable)

export type EditableProps = Ark.EditableProps & EditableVariantProps

const EditableRoot = withProvider(styled(Ark.Editable.Root), 'root')
const EditableArea = withContext(styled(Ark.Editable.Area), 'area')
const EditableCancelTrigger = withContext(styled(Ark.Editable.CancelTrigger), 'cancelTrigger')
const EditableControl = withContext(styled(Ark.Editable.Control), 'control')
const EditableEditTrigger = withContext(styled(Ark.Editable.EditTrigger), 'editTrigger')
const EditableInput = withContext(styled(Ark.Editable.Input), 'input')
const EditableLabel = withContext(styled(Ark.Editable.Label), 'label')
const EditablePreview = withContext(styled(Ark.Editable.Preview), 'preview')
const EditableSubmitTrigger = withContext(styled(Ark.Editable.SubmitTrigger), 'submitTrigger')

const Editable = Object.assign(EditableRoot, {
  Root: EditableRoot,
  Area: EditableArea,
  CancelTrigger: EditableArea,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Label: EditableLabel,
  Preview: EditablePreview,
  SubmitTrigger: EditableSubmitTrigger,
})

export {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
}
