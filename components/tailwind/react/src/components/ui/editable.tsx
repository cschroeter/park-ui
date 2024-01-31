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

const Root = withProvider(ArkEditable.Root, 'root')
const Area = withContext(ArkEditable.Area, 'area')
const CancelTrigger = withContext(ArkEditable.CancelTrigger, 'cancelTrigger')
const Control = withContext(ArkEditable.Control, 'control')
const EditTrigger = withContext(ArkEditable.EditTrigger, 'editTrigger')
const Input = withContext(ArkEditable.Input, 'input')
const Label = withContext(ArkEditable.Label, 'label')
const Preview = withContext(ArkEditable.Preview, 'preview')
const SubmitTrigger = withContext(ArkEditable.SubmitTrigger, 'submitTrigger')

export { Area, CancelTrigger, Control, EditTrigger, Input, Label, Preview, Root, SubmitTrigger }
