'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Link, type LinkProps } from '~/components/ui/link'

export const SignInLink = (props: LinkProps) => {
  const pathname = usePathname()
  const href = pathname === '/' ? '/login' : `/login?callbackUrl=${encodeURIComponent(pathname)}`

  return (
    <Link asChild {...props}>
      <NextLink href={href}>Sign In</NextLink>
    </Link>
  )
}
