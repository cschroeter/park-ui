import { Field } from '~/components/ui/field'

export const Demo = (props: Field.RootProps) => {
  return (
    <Field.Root {...props}>
      <Field.Label>Label</Field.Label>
      <Field.Input placeholder="Placeholder" />
      <Field.HelperText>Some additional Info</Field.HelperText>
    </Field.Root>
  )
}
