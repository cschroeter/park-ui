import { Stack } from 'styled-system/jsx'
import { RatingGroup } from '@/components/ui'

export const App = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const

  return (
    <Stack gap="4">
      {sizes.map((size) => (
        <RatingGroup.Root key={size} count={5} defaultValue={3} size={size}>
          <RatingGroup.HiddenInput />
          <RatingGroup.Control />
        </RatingGroup.Root>
      ))}
    </Stack>
  )
}
