import { ArrowRightIcon } from 'lucide-react'
import { IconButton, type IconButtonProps } from '~/components/ui/icon-button'

export const Demo = (props: IconButtonProps) => {
  return (
    <IconButton {...props} aria-label="Next Page">
      <ArrowRightIcon />
    </IconButton>
  )
}
