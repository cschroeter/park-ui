import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { tabs } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

const Root = withProvider(styled(ArkTabs.Root), 'root')
const Content = withContext(styled(ArkTabs.Content), 'content')
const Indicator = withContext(styled(ArkTabs.Indicator), 'indicator')
const List = withContext(styled(ArkTabs.List), 'list')
const Trigger = withContext(styled(ArkTabs.Trigger), 'trigger')

export { Content, Indicator, List, Root, Trigger }

export interface TabsRootProps extends ComponentProps<typeof Root> {}
export interface TabsContentProps extends ComponentProps<typeof Content> {}
export interface TabsIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface TabsListProps extends ComponentProps<typeof List> {}
export interface TabsTriggerProps extends ComponentProps<typeof Trigger> {}
