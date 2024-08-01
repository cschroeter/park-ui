import type { Meta } from '@storybook/react'
import { Field } from '~/components/ui/field'

const meta: Meta = {
  title: 'Components/Field',
}

export default meta

export const InputField = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}

export const InputFieldInvalid = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Label</Field.Label>
      <Field.Input />
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}

export const TextareaField = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Textarea />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}

export const TextareaFieldInvalid = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Label</Field.Label>
      <Field.Textarea />
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
