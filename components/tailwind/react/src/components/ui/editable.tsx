import { Editable } from '@ark-ui/react/editable'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const editable = tv(
  {
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(editable)

export interface RootProps extends Editable.RootProps, VariantProps<typeof editable> {}
export const Root = withProvider<HTMLDivElement, RootProps>(Editable.Root, 'root')

export const Area = withContext<HTMLDivElement, Editable.AreaProps>(Editable.Area, 'area')

export const CancelTrigger = withContext<HTMLButtonElement, Editable.CancelTriggerProps>(
  Editable.CancelTrigger,
  'cancelTrigger',
)

export const Control = withContext<HTMLDivElement, Editable.ControlProps>(
  Editable.Control,
  'control',
)

export const EditTrigger = withContext<HTMLButtonElement, Editable.EditTriggerProps>(
  Editable.EditTrigger,
  'editTrigger',
)

export const Input = withContext<HTMLInputElement, Editable.InputProps>(Editable.Input, 'input')

export const Label = withContext<HTMLLabelElement, Editable.LabelProps>(Editable.Label, 'label')

export const Preview = withContext<HTMLSpanElement, Editable.PreviewProps>(
  Editable.Preview,
  'preview',
)

export const SubmitTrigger = withContext<HTMLButtonElement, Editable.SubmitTriggerProps>(
  Editable.SubmitTrigger,
  'submitTrigger',
)

export {
  EditableContext as Context,
  type EditableContextProps as ContextProps,
} from '@ark-ui/react/editable'
