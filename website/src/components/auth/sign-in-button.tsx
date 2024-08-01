'use client'

import NextLink from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Button, type ButtonProps } from '~/components/ui/button'

export const SignInButton = (props: ButtonProps) => {
  const { children, ...buttonProps } = props
  const pathname = usePathname()
  const params = useSearchParams()
  const callbackUrl = encodeURIComponent([pathname, params.toString()].join('?'))

  const href = pathname === '/' ? '/login' : `/login?callbackUrl=${callbackUrl}`

  return (
    <Button asChild {...buttonProps}>
      <NextLink href={href}>{children}</NextLink>
    </Button>
  )
}
