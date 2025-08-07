import NextLink from 'next/link'
import { Link, type LinkProps } from '@park-ui/react/link'

interface Props extends LinkProps {
  children: React.ReactNode
  href: string
}

export const PageLink = (props: Props) => {
  const { children, href, ...linkProps } = props
  return (
    <Link asChild {...linkProps}>
      <NextLink href={href}>{children}</NextLink>
    </Link>
  )
}
