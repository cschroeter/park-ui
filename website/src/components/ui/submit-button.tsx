import { useFormStatus } from 'react-dom'
import { Button, type ButtonProps } from './button'

export const SubmitButton = (props: ButtonProps) => {
  const { pending } = useFormStatus()

  return <Button type="submit" loading={pending} {...props} />
}
