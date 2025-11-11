import { Field, Fieldset, Input } from '@/components/ui'

export const App = () => {
  return (
    <Fieldset.Root>
      <Fieldset.Control>
        <Fieldset.Legend>Contact details</Fieldset.Legend>
        <Fieldset.HelperText>Please provide your contact details below.</Fieldset.HelperText>
      </Fieldset.Control>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" />
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}
