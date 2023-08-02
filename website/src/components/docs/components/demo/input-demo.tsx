import { Stack } from 'styled-system/jsx'
import { Input, type InputProps } from '~/components/input'
import { Label } from '~/components/label'

export const InputDemo = (props: InputProps) => {
  return (
    <Stack gap="1.5">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Your Name" {...props} />
    </Stack>
  )
}
