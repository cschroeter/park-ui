import { Field, NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <Field.Root invalid>
      <Field.Label>Quantity</Field.Label>
      <NumberInput.Root defaultValue="42">
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
      <Field.ErrorText>The entry is invalid</Field.ErrorText>
    </Field.Root>
  )
}
