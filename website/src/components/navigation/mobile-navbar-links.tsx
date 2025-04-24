'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from 'styled-system/css'

const link = cva({
  base: {
    borderBottomWidth: '1px',
    color: 'fg.muted',
    fontWeight: 'medium',
    p: '3',
    transitionDuration: 'normal',
    transitionProperty: 'color',
    transitionTimingFunction: 'default',
    _hover: { color: 'fg.default' },
    _currentPage: {
      color: 'colorPalette.default',
      _hover: {
        color: 'colorPalette.default',
      },
    },
  },
})()

export const MobileNavbarLinks = () => {
  const pathname = usePathname()

  return (
    <>
      <NextLink
        href="/docs"
        className={link}
        aria-current={pathname.startsWith('/docs') ? 'page' : undefined}
      >
        Docs
      </NextLink>
      <NextLink
        href="/blocks"
        className={link}
        aria-current={pathname.startsWith('/blocks') ? 'page' : undefined}
      >
        Blocks
      </NextLink>
    </>
  )
}
