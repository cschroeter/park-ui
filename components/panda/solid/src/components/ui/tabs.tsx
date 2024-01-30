import { Tabs as ArkTabs } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { tabs } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export const TabsRoot = withProvider(styled(ArkTabs.Root), 'root')
export const TabsContent = withContext(styled(ArkTabs.Content), 'content')
export const TabsIndicator = withContext(styled(ArkTabs.Indicator), 'indicator')
export const TabsList = withContext(styled(ArkTabs.List), 'list')
export const TabsTrigger = withContext(styled(ArkTabs.Trigger), 'trigger')

export const Tabs = {
  Root: TabsRoot,
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Trigger: TabsTrigger,
}

export interface TabsRootProps extends ComponentProps<typeof TabsRoot> {}
export interface TabsContentProps extends ComponentProps<typeof TabsContent> {}
export interface TabsIndicatorProps extends ComponentProps<typeof TabsIndicator> {}
export interface TabsListProps extends ComponentProps<typeof TabsList> {}
export interface TabsTriggerProps extends ComponentProps<typeof TabsTrigger> {}
