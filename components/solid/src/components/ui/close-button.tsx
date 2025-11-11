import { XIcon } from 'lucide-solid'
import { splitProps } from 'solid-js'
import { IconButton, type IconButtonProps } from './icon-button'

export type CloseButtonProps = IconButtonProps

export const CloseButton = (props: CloseButtonProps) => {
  const [local, rest] = splitProps(props, ['children'])

  return (
    <IconButton variant="plain" colorPalette="gray" aria-label="Close" {...rest}>
      {local.children ?? <XIcon />}
    </IconButton>
  )
}
