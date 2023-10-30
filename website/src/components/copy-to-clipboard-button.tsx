import { useCopyToClipboard } from '@uidotdev/usehooks'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IconButton, Tooltip } from './ui'

interface Props {
  content: string
  dark?: boolean
}

export const CopyToClipboardButton = (props: Props) => {
  const { content, ...rest } = props
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

  const styles = props.dark ? { color: 'gray.dark.12', _hover: { bg: 'gray.dark.a3' } } : {}

  return (
    <Tooltip.Root openDelay={0} closeDelay={0} positioning={{ placement: 'top' }}>
      <Tooltip.Trigger asChild>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="Copy code to clipboard"
          onClick={handleClick}
          {...styles}
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
