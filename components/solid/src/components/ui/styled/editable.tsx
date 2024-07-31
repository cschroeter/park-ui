import { type Assign, Editable } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type EditableVariantProps, editable } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Editable.RootProviderBaseProps>, EditableVariantProps>
>(Editable.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Editable.RootBaseProps>, EditableVariantProps>
>(Editable.Root, 'root')

export const Area = withContext<Assign<HTMLStyledProps<'div'>, Editable.AreaBaseProps>>(
  Editable.Area,
  'area',
)

export const CancelTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Editable.CancelTriggerBaseProps>
>(Editable.CancelTrigger, 'cancelTrigger')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Editable.ControlBaseProps>>(
  Editable.Control,
  'control',
)

export const EditTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Editable.EditTriggerBaseProps>
>(Editable.EditTrigger, 'editTrigger')

export const Input = withContext<Assign<HTMLStyledProps<'input'>, Editable.InputBaseProps>>(
  Editable.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Editable.LabelBaseProps>>(
  Editable.Label,
  'label',
)

export const Preview = withContext<Assign<HTMLStyledProps<'span'>, Editable.PreviewBaseProps>>(
  Editable.Preview,
  'preview',
)

export const SubmitTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Editable.SubmitTriggerBaseProps>
>(Editable.SubmitTrigger, 'submitTrigger')

export { EditableContext as Context } from '@ark-ui/solid'
