'use client'
import { useWindowScroll } from '@uidotdev/usehooks'
import { type BoxProps, Container, Flex } from 'styled-system/jsx'

export const NavbarContainer = (props: BoxProps) => {
  const [{ y }] = useWindowScroll()
  const isScrolled = y && y > 32
  return (
    <Flex
      alignItems="center"
      position="fixed"
      top="0"
      width="full"
      background="bg.canvas"
      zIndex="1"
      borderBottomWidth={isScrolled ? '1px' : 'none'}
      borderColor={{ base: 'border.subtle', _dark: 'black' }}
    >
      <Container py="2.5" {...props} />
    </Flex>
  )
}
