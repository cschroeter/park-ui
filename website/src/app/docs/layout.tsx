import type { PropsWithChildren } from 'react'
import { sva } from 'styled-system/css'
import { Flex } from 'styled-system/jsx'
import { DocsNavbar } from '~/components/navigation/docs/docs-navbar'
import { DocsSidebar } from '~/components/navigation/docs/docs-sidebar'
import { SidebarContainer } from '~/components/navigation/sidebar-container'
import { getSidebarGroups } from '~/lib/docs'

const layout = sva({
  className: 'layout',
  slots: ['aside', 'main'],
  base: {
    aside: {
      bg: {
        base: 'gray.2',
        _dark: '#0e0e0e',
      },
      borderRightWidth: '1px',
      position: 'fixed',
      top: '0',
      bottom: '0',
      display: { base: 'none', md: 'block' },
      ps: 'max(32px, calc((100vw - (1440px - 64px)) / 2))',
      pe: '8',
      minWidth: '272px',
      overflow: 'auto',
      width: {
        base: '272px',
        lg: 'calc((100vw - (1440px - 64px)) / 2 + 272px - 32px)',
      },
      zIndex: 'overlay',
    },
    main: {
      minWidth: '0',
      flex: '1',
      ps: {
        base: '0',
        md: 'max(calc((100vw - 1440px) / 2 + 272px), 272px)',
      },
      pe: 'calc((100vw - 1440px) / 2)',
    },
  },
})

const styles = layout()

export default function Layout(props: PropsWithChildren) {
  const groups = getSidebarGroups()

  return (
    <>
      <DocsNavbar />
      <Flex pt={{ base: '28', md: '16' }}>
        <SidebarContainer className={styles.aside}>
          <DocsSidebar groups={groups} />
        </SidebarContainer>
        <main className={styles.main}>{props.children}</main>
      </Flex>
    </>
  )
}
