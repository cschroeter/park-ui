import { CheckIcon, CopyIcon } from 'lucide-react'
import { Clipboard, IconButton } from '@/components/ui'

interface Props {
  value: string
}

export const ClipboardButton = ({ value }: Props) => {
  return (
    <Clipboard.Root value={value}>
      <Clipboard.Control>
        <Clipboard.Trigger asChild>
          <IconButton
            variant="plain"
            size="sm"
            colorPalette="gray"
            aria-label="Copy to clipboard"
            hideBelow="lg"
          >
            <Clipboard.Indicator copied={<CheckIcon />}>
              <CopyIcon />
            </Clipboard.Indicator>
          </IconButton>
        </Clipboard.Trigger>
      </Clipboard.Control>
    </Clipboard.Root>
  )
}
