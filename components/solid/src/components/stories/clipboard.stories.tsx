import { CheckIcon, ClipboardCopyIcon } from 'lucide-solid'
import type { Meta } from 'storybook-solidjs'
import { Clipboard } from '~/components/ui/clipboard'
import { FormLabel } from '~/components/ui/form-label'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

const meta: Meta = {
  title: 'Components/Clipboard',
}

export default meta

export const Base = () => {
  return (
    <Clipboard.Root value="https://park-ui.com">
      <Clipboard.Label asChild={(props) => <FormLabel {...props()} />}>
        Copy this link
      </Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild={(props) => <Input {...props()} />} />
        <Clipboard.Trigger asChild={(props) => <IconButton {...props()} variant="outline" />}>
          <Clipboard.Indicator copied={<CheckIcon />}>
            <ClipboardCopyIcon />
          </Clipboard.Indicator>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
