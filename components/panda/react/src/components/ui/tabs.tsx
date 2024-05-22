import type { Assign } from '@ark-ui/react'
import { Tabs } from '@ark-ui/react/tabs'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export interface RootProps extends Assign<JsxStyleProps, Tabs.RootProps>, TabsVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Tabs.Root, 'root')

export interface TabContentProps extends Assign<JsxStyleProps, Tabs.ContentProps> {}
export const TabContent = withContext<HTMLDivElement, TabContentProps>(Tabs.Content, 'content')

export interface TabIndicatorProps extends Assign<JsxStyleProps, Tabs.IndicatorProps> {}
export const TabIndicator = withContext<HTMLDivElement, TabIndicatorProps>(
  Tabs.Indicator,
  'indicator',
)

export interface TabListProps extends Assign<JsxStyleProps, Tabs.ListProps> {}
export const TabList = withContext<HTMLDivElement, TabListProps>(Tabs.List, 'list')

export interface TabTriggerProps extends Assign<JsxStyleProps, Tabs.TriggerProps> {}
export const TabTrigger = withContext<HTMLButtonElement, TabTriggerProps>(Tabs.Trigger, 'trigger')

export { TabsContext as Context, type TabsContextProps as ContextProps } from '@ark-ui/react/tabs'
