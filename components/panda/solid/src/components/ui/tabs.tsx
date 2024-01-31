import { Tabs } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { tabs } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

const Root = withProvider(styled(Tabs.Root), 'root')
const Content = withContext(styled(Tabs.Content), 'content')
const Indicator = withContext(styled(Tabs.Indicator), 'indicator')
const List = withContext(styled(Tabs.List), 'list')
const Trigger = withContext(styled(Tabs.Trigger), 'trigger')

export { Content, Indicator, List, Root, Trigger }
