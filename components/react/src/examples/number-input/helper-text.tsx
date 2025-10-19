import { Field, NumberInput } from '@/components/ui'

export const App = () => {
  return (
    <Field.Root>
      <Field.Label>Quantity</Field.Label>
      <NumberInput.Root defaultValue="42" min={5} max={50}>
        <NumberInput.Control />
        <NumberInput.Input />
      </NumberInput.Root>
      <Field.HelperText>Please enter a number between 5 and 50</Field.HelperText>
    </Field.Root>
  )
}
