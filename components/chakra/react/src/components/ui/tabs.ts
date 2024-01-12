import { Tabs as ArkTabs } from '@ark-ui/react/tabs'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('Tabs')

const Tabs = withProvider(chakra(ArkTabs.Root), 'root')
const TabsContent = withContext(chakra(ArkTabs.Content), 'content')
const TabsIndicator = withContext(chakra(ArkTabs.Indicator), 'indicator')
const TabsList = withContext(chakra(ArkTabs.List), 'list')
const TabsTrigger = withContext(chakra(ArkTabs.Trigger), 'trigger')

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

export interface TabsProps extends HTMLChakraProps<typeof Tabs> {}
export interface TabsContentProps extends HTMLChakraProps<typeof TabsContent> {}
export interface TabsIndicatorProps extends HTMLChakraProps<typeof TabsIndicator> {}
export interface TabsListProps extends HTMLChakraProps<typeof TabsList> {}
export interface TabsTriggerProps extends HTMLChakraProps<typeof TabsTrigger> {}
