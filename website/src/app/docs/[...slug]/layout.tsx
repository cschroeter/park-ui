import { Grid, GridItem } from '@park-ui/styled-system/jsx'
import type { PropsWithChildren } from 'react'
import { Sidebar } from '~/components/navigation/sidebar'
import { SidebarMobileContainer } from '~/components/navigation/sidebar-mobile-container'

export default async function DocsLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <>
      <SidebarMobileContainer>
        <Sidebar />
      </SidebarMobileContainer>
      <Grid
        minH="dvh"
        gridTemplateColumns={{
          base: 'auto',
          lg: '18rem 2.5rem minmax(0,1fr) 2.5rem',
        }}
        gap="0"
        pt={{ base: '120px', lg: '16' }}
      >
        <GridItem position="relative" hideBelow="lg">
          <Sidebar />
        </GridItem>
        <GridItem hideBelow="lg" bg="gray.1" borderXWidth="1px" />
        <GridItem position="relative" bg="bg.default">
          <Grid
            isolation="isolate"
            xl={{ maxW: '5xl' }}
            mx="auto"
            width="full"
            pt="10"
            pb="24"
            px={{ base: '4', lg: '8' }}
          >
            {children}
          </Grid>
        </GridItem>
        <GridItem hideBelow="lg" borderXWidth="1px" />
      </Grid>
    </>
  )
}
