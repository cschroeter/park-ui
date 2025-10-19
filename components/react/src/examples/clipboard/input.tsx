import { Clipboard, IconButton, Input, InputGroup } from '@/components/ui'

export const App = () => {
  return (
    <Clipboard.Root value="https://park-ui.com">
      <Clipboard.Label textStyle="label">Document Link</Clipboard.Label>
      <InputGroup endElement={<ClipboardIconButton />}>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
      </InputGroup>
    </Clipboard.Root>
  )
}

const ClipboardIconButton = () => {
  return (
    <Clipboard.Trigger asChild>
      <IconButton variant="surface" size="xs" me="-2">
        <Clipboard.Indicator />
      </IconButton>
    </Clipboard.Trigger>
  )
}
