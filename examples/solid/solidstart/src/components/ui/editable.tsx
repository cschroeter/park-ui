import * as Ark from '@ark-ui/solid/editable'
import { styled } from 'styled-system/jsx'
import { editable, type EditableVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export * from '@ark-ui/solid/editable'
export type EditableProps = Ark.EditableProps & EditableVariantProps

const EditableRoot = withProvider(styled(Ark.Editable), 'root')
export const EditableArea = withContext(styled(Ark.EditableArea), 'area')
export const EditableCancelTrigger = withContext(styled(Ark.EditableCancelTrigger), 'cancelTrigger')
export const EditableControl = withContext(styled(Ark.EditableControl), 'control')
export const EditableEditTrigger = withContext(styled(Ark.EditableEditTrigger), 'editTrigger')
export const EditableInput = withContext(styled(Ark.EditableInput), 'input')
export const EditableLabel = withContext(styled(Ark.EditableLabel), 'label')
export const EditablePreview = withContext(styled(Ark.EditablePreview), 'preview')
export const EditableSubmitTrigger = withContext(styled(Ark.EditableSubmitTrigger), 'submitTrigger')

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
