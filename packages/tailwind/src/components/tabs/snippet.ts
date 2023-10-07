import * as Ark from '@ark-ui/react/tabs'
import { createStyleContext } from '~/lib/create-style-context'
import { tabsStyles } from './recipe'
export * from '@ark-ui/react/tabs'

export type TabsProps = React.ComponentProps<typeof Tabs>

const { withProvider, withContext } = createStyleContext(tabsStyles)

const TabsRoot = withProvider(Ark.Tabs.Root, 'root')
export const TabContent = withContext(Ark.Tabs.Content, 'content')
export const TabIndicator = withContext(Ark.Tabs.Indicator, 'indicator')
export const TabList = withContext(Ark.Tabs.List, 'list')
export const TabTrigger = withContext(Ark.Tabs.Trigger, 'trigger')

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Content: TabContent,
  Indicator: TabIndicator,
  List: TabList,
  Trigger: TabTrigger,
})
