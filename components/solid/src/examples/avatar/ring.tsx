import { Avatar } from '@/components/ui'

export const App = () => {
  return (
    <Avatar.Root
      size="lg"
      outline="2px solid token(colors.colorPalette.solid)"
      outlineOffset="0.125em"
    >
      <Avatar.Image src="https://avatars.githubusercontent.com/u/1846056?v=4" />
      <Avatar.Fallback name="Christian Busch" />
    </Avatar.Root>
  )
}
