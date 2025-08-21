import type { PropsWithChildren } from 'react'
import { Grid, GridItem } from 'styled-system/jsx'
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
          lg: '18rem 2rem minmax(0,1fr) 2rem',
        }}
        gap="0"
        pt={{ base: '28', lg: '14' }}
      >
        <GridItem position="relative" hideBelow="lg" borderEndWidth="1px">
          <Sidebar />
        </GridItem>
        <GridItem hideBelow="lg" bg="gray.1" />
        <GridItem position="relative" bg="bg.default" borderXWidth={{ base: '0', lg: '1px' }}>
          {children}
        </GridItem>
        <GridItem hideBelow="lg" bg="gray.1" />
      </Grid>
    </>
  )
}
