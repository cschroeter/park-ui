import { Button, type ButtonProps } from '@park-ui/react/button'
import NextLink from 'next/link'

interface Props extends ButtonProps {
  href: string
}

export const PageButton = (props: Props) => {
  const { children, href, ...buttonProps } = props
  return (
    <Button asChild {...buttonProps}>
      <NextLink href={href}>{children}</NextLink>
    </Button>
  )
}
