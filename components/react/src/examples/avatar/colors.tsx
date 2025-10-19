import { Wrap } from 'styled-system/jsx'
import { Avatar } from '@/components/ui'

const colorPalette = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'] as const

const pickPalette = (name: string) => {
  const index = name.charCodeAt(0) % colorPalette.length
  return colorPalette[index]
}

export const App = () => {
  return (
    <Wrap gap="4">
      <Avatar.Root size="lg" colorPalette={pickPalette('Shane Nelson')}>
        <Avatar.Fallback name="Shane Nelson" />
      </Avatar.Root>
      <Avatar.Root size="lg" colorPalette={pickPalette('Brook Lesnar')}>
        <Avatar.Fallback name="Brook Lesnar" />
      </Avatar.Root>
      <Avatar.Root size="lg" colorPalette={pickPalette('John Lennon')}>
        <Avatar.Fallback name="John Lennon" />
      </Avatar.Root>
    </Wrap>
  )
}
