import { Editable } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { editable } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

const Root = withProvider(styled(Editable.Root), 'root')
const Area = withContext(styled(Editable.Area), 'area')
const CancelTrigger = withContext(styled(Editable.CancelTrigger), 'cancelTrigger')
const Control = withContext(styled(Editable.Control), 'control')
const EditTrigger = withContext(styled(Editable.EditTrigger), 'editTrigger')
const Input = withContext(styled(Editable.Input), 'input')
const Label = withContext(styled(Editable.Label), 'label')
const Preview = withContext(styled(Editable.Preview), 'preview')
const SubmitTrigger = withContext(styled(Editable.SubmitTrigger), 'submitTrigger')

export { Area, CancelTrigger, Control, EditTrigger, Input, Label, Preview, Root, SubmitTrigger }
