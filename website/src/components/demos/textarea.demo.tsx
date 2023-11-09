import { Stack } from 'styled-system/jsx'
import { Label, Textarea, type TextareaProps } from '~/components/ui'

export const Demo = (props: TextareaProps) => {
  return (
    <Stack gap="1.5" width="2xs">
      <Label htmlFor="description">Description</Label>
      <Textarea id="description" rows={4} {...props} />
    </Stack>
  )
}
