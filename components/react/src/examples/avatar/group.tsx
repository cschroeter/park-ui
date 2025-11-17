import { Stack } from 'styled-system/jsx'
import { Avatar, Group } from '@/components/ui'

export const App = () => {
  return (
    <Stack gap="6">
      <Group gap="0" spaceX="-3">
        {users.map((user) => (
          <Avatar.Root key={user.name} size="lg" borderWidth="2px" borderColor="gray.surface.bg">
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.src} />
          </Avatar.Root>
        ))}
        <Avatar.Root size="lg" bg="colorPalette.3">
          <Avatar.Fallback>+3</Avatar.Fallback>
        </Avatar.Root>
      </Group>

      <Group gap="0" spaceX="-3">
        {users.map((user, index) => (
          <Avatar.Root
            key={user.name}
            size="lg"
            borderWidth="2px"
            borderColor="gray.surface.bg"
            style={{ zIndex: users.length - index }}
          >
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.src} />
          </Avatar.Root>
        ))}
        <Avatar.Root size="lg" bg="colorPalette.3">
          <Avatar.Fallback>+3</Avatar.Fallback>
        </Avatar.Root>
      </Group>

      <Group gap="0" spaceX="1">
        {users.map((user) => (
          <Avatar.Root key={user.name} size="lg">
            <Avatar.Fallback name={user.name} />
            <Avatar.Image src={user.src} />
          </Avatar.Root>
        ))}
        <Avatar.Root size="lg">
          <Avatar.Fallback>+3</Avatar.Fallback>
        </Avatar.Root>
      </Group>
    </Stack>
  )
}

const users = [
  {
    name: 'Christian Schröter',
    src: 'https://avatars.githubusercontent.com/u/1846056?v=4',
  },
  {
    name: 'Segun Adebayo',
    src: 'https://avatars.githubusercontent.com/u/6916170?v=4',
  },
  {
    name: 'Philipp Körner',
    src: 'https://avatars.githubusercontent.com/u/153984143?v=4',
  },
]
