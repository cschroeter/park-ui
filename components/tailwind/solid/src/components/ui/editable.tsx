import { Editable } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Editable.Root, 'root')
export const Area = withContext(Editable.Area, 'area')
export const CancelTrigger = withContext(Editable.CancelTrigger, 'cancelTrigger')
export const Control = withContext(Editable.Control, 'control')
export const EditTrigger = withContext(Editable.EditTrigger, 'editTrigger')
export const Input = withContext(Editable.Input, 'input')
export const Label = withContext(Editable.Label, 'label')
export const Preview = withContext(Editable.Preview, 'preview')
export const SubmitTrigger = withContext(Editable.SubmitTrigger, 'submitTrigger')

export type RootProps = ComponentProps<typeof Root>
export interface AreaProps extends ComponentProps<typeof Area> {}
export interface CancelTriggerProps extends ComponentProps<typeof CancelTrigger> {}
export interface ControlProps extends ComponentProps<typeof Control> {}
export interface EditTriggerProps extends ComponentProps<typeof EditTrigger> {}
export interface InputProps extends ComponentProps<typeof Input> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
export interface PreviewProps extends ComponentProps<typeof Preview> {}
export interface SubmitTriggerProps extends ComponentProps<typeof SubmitTrigger> {}
