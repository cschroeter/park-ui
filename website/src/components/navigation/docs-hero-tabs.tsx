import { Container, HStack } from 'styled-system/jsx'
import { TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui'
import { Badge } from '../ui/badge'

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
            <a href={pathname.replace('panda', 'tailwind')}>
              <HStack gap="2">
                Tailwind
                <Badge variant="subtle" size="sm">
                  Alpha
                </Badge>
              </HStack>
            </a>
          </TabTrigger>
          <TabIndicator />
        </TabList>
      </Tabs>
    </Container>
  )
}
