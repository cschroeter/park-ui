'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, type ButtonProps } from '~/components/ui'

export const SignInButton = (props: ButtonProps) => {
  const pathname = usePathname()
  const href = pathname === '/' ? '/login' : `/login?callbackUrl=${encodeURIComponent(pathname)}`

  return (
    <Button asChild variant="subtle" size="sm" {...props}>
      <NextLink href={href}>Sign In</NextLink>
    </Button>
  )
}
