import { CheckIcon, ClipboardCopyIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Clipboard, FormLabel, IconButton, Input } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Clipboard',
}

export default meta

export const Base = () => {
  return (
    <Clipboard.Root value="https://park-ui.com">
      <Clipboard.Label as={FormLabel}>Copy this link</Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input as={Input} />
        <Clipboard.Trigger as={IconButton} variant="outline">
          <Clipboard.Indicator copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
