import { Tabs, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type TabsVariantProps, tabs } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tabs)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Tabs.RootProviderProps>, TabsVariantProps>
>(Tabs.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Tabs.RootProps>, TabsVariantProps>
>(Tabs.Root, 'root')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Tabs.ContentProps>>(
  Tabs.Content,
  'content',
)

export const Indicator = withContext<Assign<HTMLStyledProps<'div'>, Tabs.IndicatorProps>>(
  Tabs.Indicator,
  'indicator',
)

export const List = withContext<Assign<HTMLStyledProps<'div'>, Tabs.ListProps>>(Tabs.List, 'list')

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Tabs.TriggerProps>>(
  Tabs.Trigger,
  'trigger',
)

export { TabsContext as Context } from '@ark-ui/solid'
