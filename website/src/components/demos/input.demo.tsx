import { Stack } from 'styled-system/jsx'
import { Input, Label, type InputProps } from '~/components/ui'

export const Demo = (props: InputProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" {...props} />
    </Stack>
  )
}
