import { FiArrowRight } from 'react-icons/fi'
import { Button, type ButtonProps } from '~/components/button'

export const ButtonDemo = (props: ButtonProps) => {
  return (
    <Button {...props}>
      Button
      <FiArrowRight />
    </Button>
  )
}
