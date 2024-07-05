import { Editable, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type EditableVariantProps, editable } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(editable)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Editable.RootProviderProps>, EditableVariantProps>
>(Editable.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Editable.RootProps>, EditableVariantProps>
>(Editable.Root, 'root')

export const Area = withContext<Assign<HTMLStyledProps<'div'>, Editable.AreaProps>>(
  Editable.Area,
  'area',
)

export const CancelTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Editable.CancelTriggerProps>
>(Editable.CancelTrigger, 'cancelTrigger')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, Editable.ControlProps>>(
  Editable.Control,
  'control',
)

export const EditTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Editable.EditTriggerProps>
>(Editable.EditTrigger, 'editTrigger')

export const Input = withContext<Assign<HTMLStyledProps<'input'>, Editable.InputProps>>(
  Editable.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Editable.LabelProps>>(
  Editable.Label,
  'label',
)

export const Preview = withContext<Assign<HTMLStyledProps<'span'>, Editable.PreviewProps>>(
  Editable.Preview,
  'preview',
)

export const SubmitTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Editable.SubmitTriggerProps>
>(Editable.SubmitTrigger, 'submitTrigger')

export { EditableContext as Context } from '@ark-ui/solid'
