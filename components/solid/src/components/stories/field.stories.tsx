import type { Meta } from 'storybook-solidjs'
import { Field } from '~/components/ui/field'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'

const meta: Meta = {
  title: 'Components/Field',
}

export default meta

export const InputField = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input asChild={(inputProps) => <Input {...inputProps()} />} />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}

export const InputFieldInvalid = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Label</Field.Label>
      <Field.Input asChild={(inputProps) => <Input {...inputProps()} />} />
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}

export const TextareaField = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Textarea asChild={(textareaProps) => <Textarea {...textareaProps()} />} />
      <Field.HelperText>Some additional Info</Field.HelperText>
    </Field.Root>
  )
}

export const TextareaFieldInvalid = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Label</Field.Label>
      <Field.Textarea asChild={(textareaProps) => <Textarea {...textareaProps()} />} />
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
