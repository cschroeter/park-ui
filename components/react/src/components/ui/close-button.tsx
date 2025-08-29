import { forwardRef } from 'react'
import { IconButton, type IconButtonProps } from './icon-button'

export type CloseButtonProps = IconButtonProps

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  function CloseButton(props, ref) {
    return (
      <IconButton variant="ghost" aria-label="Close" ref={ref} {...props}>
        {props.children ?? <XIcon />}
      </IconButton>
    )
  },
)

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <title>Close Icon</title>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)
