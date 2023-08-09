'use client'
import { useEffect, useState } from 'react'
import { FiCheck, FiCopy } from 'react-icons/fi'
import { useCopyToClipboard } from 'usehooks-ts'
import { IconButton, type IconButtonProps } from '../ui/icon-button'

type Props = { content: string } & Omit<IconButtonProps, 'aria-label' | 'icon'>

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
      variant="tertiary"
      size="sm"
      {...props}
      icon={visible ? <FiCopy /> : <FiCheck />}
      aria-label="Copy code to clipboard"
      onClick={handleClick}
    />
  )
}
