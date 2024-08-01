import { type Assign, Field } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { type FieldVariantProps, field, input, textarea } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

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

export const Label = withContext<Assign<HTMLStyledProps<'label'>, Field.LabelBaseProps>>(
  Field.Label,
  'label',
)

export const Select = withContext<Assign<HTMLStyledProps<'select'>, Field.SelectBaseProps>>(
  Field.Select,
  'select',
)

export type InputProps = ComponentProps<typeof Input>
export const Input = styled(Field.Input, input)

export type TextareaProps = ComponentProps<typeof Textarea>
export const Textarea = styled(Field.Textarea, textarea)

export { FieldContext as Context } from '@ark-ui/solid'
