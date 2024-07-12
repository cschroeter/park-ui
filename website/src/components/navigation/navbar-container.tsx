'use client'
import { usePathname } from 'next/navigation'
import { type BoxProps, Container, Flex } from 'styled-system/jsx'

export const NavbarContainer = (props: BoxProps) => {
  const pathname = usePathname()
  return (
    <Flex
      alignItems="center"
      position="fixed"
      top="0"
      width="full"
      background="bg.canvas"
      zIndex="sticky"
      borderBottomWidth={pathname === '/' ? '0' : '1px'}
      borderColor={{ base: 'border.subtle', _dark: 'black' }}
    >
      <Container py="2.5" {...props} />
    </Flex>
  )
}
