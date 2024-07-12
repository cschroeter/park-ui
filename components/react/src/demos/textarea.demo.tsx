import { Stack } from 'styled-system/jsx'
import { FormLabel, Textarea, type TextareaProps } from '~/components/ui'

export const Demo = (props: TextareaProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel htmlFor="description">Description</FormLabel>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  )
}
