import { FiArrowRight } from 'react-icons/fi'
import { IconButton, type IconButtonProps } from '~/components/ui/icon-button'

export const IconButtonDemo = (props: IconButtonProps) => {
  return (
    <IconButton {...props} aria-label="Next Page">
      <FiArrowRight />
    </IconButton>
  )
}
