'use client'

import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { tabs } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

const Tabs = withProvider(styled(ArkTabs.Root), 'root')
const TabsContent = withContext(styled(ArkTabs.Content), 'content')
const TabsIndicator = withContext(styled(ArkTabs.Indicator), 'indicator')
const TabsList = withContext(styled(ArkTabs.List), 'list')
const TabsTrigger = withContext(styled(ArkTabs.Trigger), 'trigger')

const Root = Tabs
const Content = TabsContent
const Indicator = TabsIndicator
const List = TabsList
const Trigger = TabsTrigger

export {
  Content,
  Indicator,
  List,
  Root,
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
  Trigger,
}

export interface TabsProps extends ComponentProps<typeof Tabs> {}
export interface TabsContentProps extends ComponentProps<typeof TabsContent> {}
export interface TabsIndicatorProps extends ComponentProps<typeof TabsIndicator> {}
export interface TabsListProps extends ComponentProps<typeof TabsList> {}
export interface TabsTriggerProps extends ComponentProps<typeof TabsTrigger> {}
