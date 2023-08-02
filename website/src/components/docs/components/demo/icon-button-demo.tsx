import { FiArrowRight } from 'react-icons/fi'
import { IconButton, type IconButtonProps } from '~/components/icon-button'

export const IconButtonDemo = (props: Omit<IconButtonProps, 'aria-label'>) => {
  return <IconButton aria-label="Next Page" icon={<FiArrowRight />} {...props} />
}
