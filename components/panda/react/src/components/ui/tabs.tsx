import type { Assign } from '@ark-ui/react'
import { Tabs } from '@ark-ui/react/tabs'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export interface RootProps extends Assign<JsxStyleProps, Tabs.RootProps>, TabsVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Tabs.Root, 'root')

export interface ContentProps extends Assign<JsxStyleProps, Tabs.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Tabs.Content, 'content')

export interface IndicatorProps extends Assign<JsxStyleProps, Tabs.IndicatorProps> {}
export const Indicator = withContext<HTMLDivElement, IndicatorProps>(Tabs.Indicator, 'indicator')

export interface ListProps extends Assign<JsxStyleProps, Tabs.ListProps> {}
export const List = withContext<HTMLDivElement, ListProps>(Tabs.List, 'list')

export interface TriggerProps extends Assign<JsxStyleProps, Tabs.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Tabs.Trigger, 'trigger')

export { TabsContext as Context, type TabsContextProps as ContextProps } from '@ark-ui/react/tabs'
