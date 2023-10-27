import { useCopyToClipboard } from '@uidotdev/usehooks'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IconButton, Tooltip } from './ui'

type Props = { content: string }

export const CopyToClipboardButton = (props: Props) => {
  const { content } = props
  const [_, copyToClipboard] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleClick = () => {
    copyToClipboard(content)
    setVisible(false)
  }

  return (
    <Tooltip.Root openDelay={0} closeDelay={0} positioning={{ placement: 'top' }}>
      <Tooltip.Trigger asChild>
        <IconButton
          variant="ghost"
          size="xs"
          aria-label="Copy code to clipboard"
          onClick={handleClick}
        >
          {visible ? <CopyIcon /> : <CheckIcon />}
        </IconButton>
      </Tooltip.Trigger>

      <Tooltip.Positioner>
        <Tooltip.Arrow>
          <Tooltip.ArrowTip />
        </Tooltip.Arrow>
        <Tooltip.Content>Copy source</Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  )
}
