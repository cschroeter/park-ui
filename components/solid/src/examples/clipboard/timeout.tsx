import { Clipboard, IconButton } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="https://park-ui.com" timeout={1000}>
      <Clipboard.Trigger
        asChild={(triggerProps) => (
          <IconButton variant="surface" size="sm" {...triggerProps()}>
            <Clipboard.Indicator />
          </IconButton>
        )}
      />
    </Clipboard.Root>
  )
}
