import { Tabs as ArkTabs } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { tabs } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export const TabsRoot = withProvider(styled(ArkTabs.Root), 'root')
export const TabsContent = withContext(styled(ArkTabs.Content), 'content')
export const TabsIndicator = withContext(styled(ArkTabs.Indicator), 'indicator')
export const TabsList = withContext(styled(ArkTabs.List), 'list')
export const TabsTrigger = withContext(styled(ArkTabs.Trigger), 'trigger')

export const Tabs = Object.assign(TabsRoot, {
  Root: TabsRoot,
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Trigger: TabsTrigger,
})

export type TabsProps = typeof TabsRoot
export type TabsContentProps = typeof TabsContent
export type TabsIndicatorProps = typeof TabsIndicator
export type TabsListProps = typeof TabsList
export type TabsTriggerProps = typeof TabsTrigger
