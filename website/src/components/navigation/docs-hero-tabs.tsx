import { Container } from 'styled-system/jsx'
import { TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui'

interface Props {
  value: string
  pathname: string
}

export const DocsHeroTabs = (props: Props) => {
  const { pathname, value } = props
  return (
    <Container maxW="66rem">
      <Tabs value={value} size="lg" variant="outline">
        <TabList>
          <TabTrigger value="panda" _selected={{ bg: 'bg.surface' }}>
            <a href={pathname.replace('tailwind', 'panda')}>Panda</a>
          </TabTrigger>
          <TabTrigger value="tailwind" _selected={{ bg: 'bg.surface' }}>
            <a href={pathname.replace('panda', 'tailwind')}>Tailwind</a>
          </TabTrigger>
          <TabIndicator />
        </TabList>
      </Tabs>
    </Container>
  )
}
