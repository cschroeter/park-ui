import { Field, Fieldset, Input } from '@/components/ui'

export const App = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Legend>Legend</Fieldset.Legend>
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input type="text" placeholder="Enter your email" />
      </Field.Root>
      <Fieldset.HelperText>Helper text</Fieldset.HelperText>
      <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
    </Fieldset.Root>
  )
}
