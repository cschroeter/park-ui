import NextLink from 'next/link'
import { Link } from '@/components/ui'

export const App = () => {
  return (
    <Link asChild>
      <NextLink href="/about">Click here</NextLink>
    </Link>
  )
}
