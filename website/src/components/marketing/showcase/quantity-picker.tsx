import { NumberInput } from '~/components/ui'

export const QuantityPicker = () => {
  return (
    <NumberInput min={1} max={5} defaultValue="1">
      Quantity
    </NumberInput>
  )
}
