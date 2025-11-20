import NextLink from 'next/link'
import { Button, type ButtonProps } from '@/components/ui'

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
