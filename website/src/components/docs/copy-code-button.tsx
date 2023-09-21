'use client'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'
import { IconButton } from '~/components/ui/icon-button'

type Props = { content: string }

export const CopyCodeButton = (props: Props) => {
  const { content } = props
  const [_, copy] = useCopyToClipboard()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (visible) return
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [visible])

  const handleClick = () => {
    copy(content)
    setVisible(false)
  }

  return (
    <IconButton
      variant="ghost"
      size="sm"
      {...props}
      aria-label="Copy code to clipboard"
      onClick={handleClick}
    >
      {visible ? <CopyIcon /> : <CheckIcon />}
    </IconButton>
  )
}
