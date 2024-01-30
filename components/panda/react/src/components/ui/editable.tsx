import { Editable as ArkEditable } from '@ark-ui/react/editable'
import type { ComponentProps } from 'react'
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

export const Editable = {
  Root: EditableRoot,
  Area: EditableArea,
  CancelTrigger: EditableCancelTrigger,
  Control: EditableControl,
  EditTrigger: EditableEditTrigger,
  Input: EditableInput,
  Label: EditableLabel,
  Preview: EditablePreview,
  SubmitTrigger: EditableSubmitTrigger,
}

export interface EditableRootProps extends ComponentProps<typeof EditableRoot> {}
export interface EditableAreaProps extends ComponentProps<typeof EditableArea> {}
export interface EditableCancelTriggerProps extends ComponentProps<typeof EditableCancelTrigger> {}
export interface EditableControlProps extends ComponentProps<typeof EditableControl> {}
export interface EditableEditTriggerProps extends ComponentProps<typeof EditableEditTrigger> {}
export interface EditableInputProps extends ComponentProps<typeof EditableInput> {}
export interface EditableLabelProps extends ComponentProps<typeof EditableLabel> {}
export interface EditablePreviewProps extends ComponentProps<typeof EditablePreview> {}
export interface EditableSubmitTriggerProps extends ComponentProps<typeof EditableSubmitTrigger> {}
