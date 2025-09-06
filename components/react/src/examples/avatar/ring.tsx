import { Avatar } from '@/components/ui'

export const App = () => {
  return (
    <Avatar.Root outline="2px solid token(colors.colorPalette.solid)" outlineOffset="0.125em">
      <Avatar.Image src="https://shorturl.at/gaV8r" />
      <Avatar.Fallback name="Christian Busch" />
    </Avatar.Root>
  )
}
