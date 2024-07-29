import { Field } from '~/components/ui/field'
import { Input } from '~/components/ui/input'

export const Demo = (props: Field.RootProps) => {
  return (
    <Field.Root {...props}>
      <Field.Label>Label</Field.Label>
      <Field.Input asChild>
        <Input />
      </Field.Input>
      <Field.HelperText>Some additional Info</Field.HelperText>
    </Field.Root>
  )
}
