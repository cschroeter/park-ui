import { Clipboard, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="https://park-ui.com" timeout={1000}>
      <Clipboard.Trigger asChild>
        <IconButton variant="surface" size="sm">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}
