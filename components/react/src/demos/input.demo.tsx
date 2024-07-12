import { Stack } from 'styled-system/jsx'
import { FormLabel, Input, type InputProps } from '~/components/ui'

export const Demo = (props: InputProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input id="name" placeholder="Your Name" {...props} />
    </Stack>
  )
}
