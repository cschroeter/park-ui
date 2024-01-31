import { Editable as ArkEditable } from '@ark-ui/react/editable'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { editable } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

const Root = withProvider(styled(ArkEditable.Root), 'root')
const Area = withContext(styled(ArkEditable.Area), 'area')
const CancelTrigger = withContext(styled(ArkEditable.CancelTrigger), 'cancelTrigger')
const Control = withContext(styled(ArkEditable.Control), 'control')
const EditTrigger = withContext(styled(ArkEditable.EditTrigger), 'editTrigger')
const Input = withContext(styled(ArkEditable.Input), 'input')
const Label = withContext(styled(ArkEditable.Label), 'label')
const Preview = withContext(styled(ArkEditable.Preview), 'preview')
const SubmitTrigger = withContext(styled(ArkEditable.SubmitTrigger), 'submitTrigger')

export { Area, CancelTrigger, Control, EditTrigger, Input, Label, Preview, Root, SubmitTrigger }

export interface EditableRootProps extends ComponentProps<typeof Root> {}
export interface EditableAreaProps extends ComponentProps<typeof Area> {}
export interface EditableCancelTriggerProps extends ComponentProps<typeof CancelTrigger> {}
export interface EditableControlProps extends ComponentProps<typeof Control> {}
export interface EditableEditTriggerProps extends ComponentProps<typeof EditTrigger> {}
export interface EditableInputProps extends ComponentProps<typeof Input> {}
export interface EditableLabelProps extends ComponentProps<typeof Label> {}
export interface EditablePreviewProps extends ComponentProps<typeof Preview> {}
export interface EditableSubmitTriggerProps extends ComponentProps<typeof SubmitTrigger> {}
