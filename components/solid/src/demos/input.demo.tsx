import { Stack } from 'styled-system/jsx'
import { FormLabel } from '~/components/ui/form-label'
import { Input, type InputProps } from '~/components/ui/input'

export const Demo = (props: InputProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel for="name">Name</FormLabel>
      <Input id="name" placeholder="Your Name" {...props} />
    </Stack>
  )
}
