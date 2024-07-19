import type { Meta } from '@storybook/react'
import { CheckIcon, ClipboardCopyIcon } from 'lucide-react'
import { Clipboard, FormLabel, IconButton, Input } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Clipboard',
}

export default meta

export const Base = () => {
  return (
    <Clipboard.Root value="https://park-ui.com">
      <Clipboard.Label asChild>
        <FormLabel>Copy this link</FormLabel>
      </Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild>
          <Input />
        </Clipboard.Input>
        <Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
