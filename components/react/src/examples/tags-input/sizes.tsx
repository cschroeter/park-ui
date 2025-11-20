import { Stack } from 'styled-system/jsx'
import { TagsInput } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg'] as const
  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <TagsInput.Root key={size} size={size} defaultValue={['React', 'Solid', 'Vue']}>
          <TagsInput.Label>Tags</TagsInput.Label>
          <TagsInput.Control>
            <TagsInput.Items />
            <TagsInput.Input placeholder="Add tag..." />
          </TagsInput.Control>
        </TagsInput.Root>
      ))}
    </Stack>
  )
}
