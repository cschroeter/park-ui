import { ArrowRightIcon } from 'lucide-react'
import { Button, type ButtonProps } from '~/components/ui/button'

export const Demo = (props: ButtonProps) => {
  return (
    <Button {...props}>
      Button
      <ArrowRightIcon />
    </Button>
  )
}
