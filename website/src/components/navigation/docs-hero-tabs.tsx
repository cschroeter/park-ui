import { Container } from 'styled-system/jsx'
import { Tabs } from '~/components/ui'

interface Props {
  value: string
  pathname: string
}

export const DocsHeroTabs = (props: Props) => {
  const { pathname, value } = props
  return (
    <Container maxW="66rem">
      <Tabs.Root value={value} size="lg" variant="outline">
        <Tabs.List>
          <Tabs.Trigger value="panda" _selected={{ bg: 'bg.surface' }}>
            <a href={pathname.replace('tailwind', 'panda')}>Panda</a>
          </Tabs.Trigger>
          <Tabs.Trigger value="tailwind" _selected={{ bg: 'bg.surface' }}>
            <a href={pathname.replace('panda', 'tailwind')}>Tailwind</a>
          </Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
    </Container>
  )
}
