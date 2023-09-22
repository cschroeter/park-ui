import type { PropsWithChildren } from 'react'
import { Box, Container, Flex } from 'styled-system/jsx'
import { Sidebar } from '~/components/layout/sidebar'

const DocsLayout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <Container flex="1" px="0">
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        position="fixed"
        top="74px"
        bottom="0"
        minW="60"
        pt="10"
        overflowY="auto"
        px={{ base: '4', md: '6' }}
      >
        <Sidebar />
      </Flex>
      <Flex flex="1" pl={{ base: 'none', lg: '15rem' }}>
        <Box
          pb={{ base: '12', md: '24' }}
          pl={{ base: 'none', lg: '16' }}
          width="full"
          mt={{ base: '8', md: '10' }}
        >
          {children}
        </Box>
      </Flex>
    </Container>
  )
}

export default DocsLayout
