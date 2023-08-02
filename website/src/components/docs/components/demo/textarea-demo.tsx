import { Stack } from 'styled-system/jsx'
import { Label } from '~/components/label'
import { Textarea, type TextareaProps } from '~/components/textarea'

export const TextareaDemo = (props: TextareaProps) => {
  return (
    <Stack gap="1.5">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  )
}
