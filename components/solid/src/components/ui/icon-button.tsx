import { Button, type ButtonProps } from './button'

export interface IconButtonProps extends ButtonProps {}

export const IconButton = (props: IconButtonProps) => {
  return <Button px="0" py="0" {...props} />
}
