import { Editable as ArkEditable } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { editable } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export const EditableRoot = withProvider(styled(ArkEditable.Root), 'root')
export const EditableArea = withContext(styled(ArkEditable.Area), 'area')
export const EditableCancelTrigger = withContext(styled(ArkEditable.CancelTrigger), 'cancelTrigger')
export const EditableControl = withContext(styled(ArkEditable.Control), 'control')
export const EditableEditTrigger = withContext(styled(ArkEditable.EditTrigger), 'editTrigger')
export const EditableInput = withContext(styled(ArkEditable.Input), 'input')
export const EditableLabel = withContext(styled(ArkEditable.Label), 'label')
export const EditablePreview = withContext(styled(ArkEditable.Preview), 'preview')
export const EditableSubmitTrigger = withContext(styled(ArkEditable.SubmitTrigger), 'submitTrigger')

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

export type EditableProps = typeof EditableRoot
export type EditableAreaProps = typeof EditableArea
export type EditableCancelTriggerProps = typeof EditableCancelTrigger
export type EditableControlProps = typeof EditableControl
export type EditableEditTriggerProps = typeof EditableEditTrigger
export type EditableInputProps = typeof EditableInput
export type EditableLabelProps = typeof EditableLabel
export type EditablePreviewProps = typeof EditablePreview
export type EditableSubmitTriggerProps = typeof EditableSubmitTrigger
