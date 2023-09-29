import { ArrowRightIcon } from 'lucide-react'
import { Button, type ButtonProps } from '~/components/ui/button'

export const ButtonDemo = (props: ButtonProps) => {
  return (
    <Button {...props}>
      Button
      <ArrowRightIcon />
    </Button>
  )
}
