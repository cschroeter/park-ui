import { Editable as ArkEditable } from '@ark-ui/react/editable'
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
