import NextLink from 'next/link'
import { Link, type LinkProps } from '@/components/ui'

interface Props extends LinkProps {
  children: React.ReactNode
  href: string
}

export const PageLink = (props: Props) => {
  const { children, href, ...linkProps } = props

  if (href.startsWith('/') || href.startsWith('#')) {
    return (
      <Link asChild {...linkProps}>
        <NextLink href={href}>{children}</NextLink>
      </Link>
    )
  }
  return (
    <Link href={href} target="_blank" {...linkProps}>
      {children}
    </Link>
  )
}
