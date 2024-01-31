import { Editable } from '@ark-ui/react/editable'
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

const Root = withProvider(Editable.Root, 'root')
const Area = withContext(Editable.Area, 'area')
const CancelTrigger = withContext(Editable.CancelTrigger, 'cancelTrigger')
const Control = withContext(Editable.Control, 'control')
const EditTrigger = withContext(Editable.EditTrigger, 'editTrigger')
const Input = withContext(Editable.Input, 'input')
const Label = withContext(Editable.Label, 'label')
const Preview = withContext(Editable.Preview, 'preview')
const SubmitTrigger = withContext(Editable.SubmitTrigger, 'submitTrigger')

export { Area, CancelTrigger, Control, EditTrigger, Input, Label, Preview, Root, SubmitTrigger }
