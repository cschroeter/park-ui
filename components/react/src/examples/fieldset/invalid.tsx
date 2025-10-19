import { Field, Fieldset, Input } from '@/components/ui'

export const App = () => {
  return (
    <Fieldset.Root invalid>
      <Fieldset.Control>
        <Fieldset.Legend>Shipping details</Fieldset.Legend>
        <Fieldset.ErrorText>Some fields are invalid. Please check them.</Fieldset.ErrorText>
      </Fieldset.Control>
      <Fieldset.Content>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Input name="name" defaultValue="Christian Busch" />
        </Field.Root>
        <Field.Root invalid>
          <Field.Label>Email address</Field.Label>
          <Input name="email" type="email" defaultValue="christian@park-ui.com" />
          <Field.ErrorText>The email has already been taken.</Field.ErrorText>
        </Field.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  )
}
