import { Stack } from 'styled-system/jsx'
import { Checkbox, Text } from '@/components/ui'

export const App = () => {
  return (
    <Checkbox.Root alignItems="flex-start">
      <Checkbox.HiddenInput />
      <Checkbox.Control mt="0.5">
        <Checkbox.Indicator />
      </Checkbox.Control>
      <Stack gap="0">
        <Checkbox.Label>I agree to the terms and conditions</Checkbox.Label>
        <Text>By clicking this, you agree to our Terms and Privacy Policy.</Text>
      </Stack>
    </Checkbox.Root>
  )
}
