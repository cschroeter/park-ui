import type { PropsWithChildren } from 'react'
import { Box, Container, Flex } from 'styled-system/jsx'
import { Sidebar } from '~/components/layout/sidebar'

const DocsLayout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <Container flex="1">
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        position="fixed"
        width="60"
        top="74px"
        bottom="0"
        pt="10"
        overflowY="auto"
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
