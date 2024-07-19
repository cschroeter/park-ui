'use client'
import { useWindowScroll } from '@uidotdev/usehooks'
import { usePathname } from 'next/navigation'
import { type BoxProps, Container, Flex } from 'styled-system/jsx'

export const NavbarContainer = (props: BoxProps) => {
  const [{ y }] = useWindowScroll()
  const pathname = usePathname()

  const isScrolled = y && y > 32
  const showBorder = isScrolled || pathname.includes('/docs')
  return (
    <Flex
      alignItems="center"
      position="fixed"
      top="0"
      width="full"
      background="bg.canvas"
      zIndex="sticky"
      borderBottomWidth={showBorder ? '1px' : 'none'}
      borderColor={{ base: 'border.subtle', _dark: 'black' }}
    >
      <Container py="2.5" {...props} />
    </Flex>
  )
}
