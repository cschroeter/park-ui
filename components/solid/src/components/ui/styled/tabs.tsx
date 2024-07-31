import { type Assign, Tabs } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Tabs.RootProviderBaseProps>, TabsVariantProps>
>(Tabs.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Tabs.RootBaseProps>, TabsVariantProps>
>(Tabs.Root, 'root')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Tabs.ContentBaseProps>>(
  Tabs.Content,
  'content',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Tabs.IndicatorBaseProps>>(
  Tabs.Indicator,
  'indicator',
)

export const List = withContext<Assign<HTMLStyledProps<'div'>, Tabs.ListBaseProps>>(
  Tabs.List,
  'list',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Tabs.TriggerBaseProps>>(
  Tabs.Trigger,
  'trigger',
)

export { TabsContext as Context } from '@ark-ui/solid'
