import type { Meta } from '@storybook/react'
import { Field } from '~/components/ui/field'
import { Input } from '~/components/ui/input'

const meta: Meta = {
  title: 'Components/Field',
}

export default meta

export const Base = () => {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Input asChild>
        <Input />
      </Field.Input>
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}

export const Invalid = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Label</Field.Label>
      <Field.Input asChild>
        <Input />
      </Field.Input>
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  )
}
