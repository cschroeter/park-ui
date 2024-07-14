import { type Assign, Field } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type FieldVariantProps, field } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(field)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Field.RootProviderBaseProps>, FieldVariantProps>
>(Field.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Field.RootBaseProps>, FieldVariantProps>
>(Field.Root, 'root')

export const ErrorText = withContext<Assign<HTMLStyledProps<'span'>, Field.ErrorTextBaseProps>>(
  Field.ErrorText,
  'errorText',
)

export const HelperText = withContext<Assign<HTMLStyledProps<'span'>, Field.HelperTextBaseProps>>(
  Field.HelperText,
  'helperText',
)

export const Input = withContext<Assign<HTMLStyledProps<'input'>, Field.InputBaseProps>>(
  Field.Input,
  'input',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Field.LabelBaseProps>>(
  Field.Label,
  'label',
)

export const Select = withContext<Assign<HTMLStyledProps<'select'>, Field.SelectBaseProps>>(
  Field.Select,
  'select',
)

export const Textarea = withContext<Assign<HTMLStyledProps<'textarea'>, Field.TextareaBaseProps>>(
  Field.Textarea,
  'textarea',
)

export { FieldContext as Context } from '@ark-ui/solid'
