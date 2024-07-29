import { CheckIcon, ClipboardCopyIcon } from 'lucide-solid'
import { Clipboard } from '~/components/ui/clipboard'
import { FormLabel } from '~/components/ui/form-label'
import { IconButton } from '~/components/ui/icon-button'
import { Input } from '~/components/ui/input'

export const Demo = (props: Clipboard.RootProps) => {
  return (
    <Clipboard.Root value="https://park-ui.com" {...props}>
      <Clipboard.Label asChild={(labelProps) => <FormLabel {...labelProps()} />}>
        Copy this link
      </Clipboard.Label>
      <Clipboard.Control>
        <Clipboard.Input asChild={(inputProps) => <Input {...inputProps()} />} />
        <Clipboard.Trigger
          asChild={(triggerProps) => (
            <IconButton variant="outline" {...triggerProps()}>
              <Clipboard.Indicator copied={<CheckIcon />}>
                <ClipboardCopyIcon />
              </Clipboard.Indicator>
            </IconButton>
          )}
        />
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
