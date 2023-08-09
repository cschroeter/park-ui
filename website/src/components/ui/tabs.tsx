'use client'
import * as Ark from '@ark-ui/react/tabs'
import { styled } from 'styled-system/jsx'
import { tabs, type TabsVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/tabs'

const { withProvider, withContext } = createStyleContext(tabs)

export type TabsProps = Ark.TabsProps & TabsVariantProps

const TabsRoot = withProvider(styled(Ark.Tabs.Root), 'root')
const TabContent = withContext(styled(Ark.Tabs.Content), 'content')
const TabIndicator = withContext(styled(Ark.Tabs.Indicator), 'indicator')
const TabList = withContext(styled(Ark.Tabs.List), 'tablist')
const TabTrigger = withContext(styled(Ark.Tabs.Trigger), 'trigger')

const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Content: TabContent,
  Indicator: TabIndicator,
  List: TabList,
  Trigger: TabTrigger,
})

export { TabContent, TabIndicator, TabList, Tabs, TabTrigger }
