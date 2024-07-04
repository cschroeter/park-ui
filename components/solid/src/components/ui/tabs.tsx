import { type Assign, Tabs } from '@ark-ui/solid'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export interface RootProps extends Assign<JsxStyleProps, Tabs.RootProps>, TabsVariantProps {}
export const Root = withProvider<RootProps>(Tabs.Root, 'root')

export const Content = withContext<Assign<JsxStyleProps, Tabs.ContentProps>>(
  Tabs.Content,
  'content',
)

export const Indicator = withContext<Assign<JsxStyleProps, Tabs.IndicatorProps>>(
  Tabs.Indicator,
  'indicator',
)

export const List = withContext<Assign<JsxStyleProps, Tabs.ListProps>>(Tabs.List, 'list')

export const Trigger = withContext<Assign<JsxStyleProps, Tabs.TriggerProps>>(
  Tabs.Trigger,
  'trigger',
)

export { TabsContext as Context, type TabsContextProps as ContextProps } from '@ark-ui/solid'
