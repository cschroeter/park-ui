import { useCopyToClipboard } from '@uidotdev/usehooks'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui'

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
    <Button
      variant="ghost"
      size="sm"
      px="0"
      {...props}
      aria-label="Copy code to clipboard"
      onClick={handleClick}
    >
      {visible ? <CopyIcon /> : <CheckIcon />}
    </Button>
  )
}
