import { Stack } from 'styled-system/jsx'
import { FormLabel } from '~/components/ui/form-label'
import { Textarea, type TextareaProps } from '~/components/ui/textarea'

export const Demo = (props: TextareaProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <FormLabel htmlFor="description">Description</FormLabel>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  )
}
