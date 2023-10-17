import { Button, type ButtonProps } from '../button/snippet'

export type IconButtonProps = ButtonProps & { 'aria-label': string }

export const IconButton = (props: IconButtonProps) => {
  return <Button className="px-0" {...props} />
}
