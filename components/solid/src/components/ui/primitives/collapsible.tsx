import { Collapsible, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type CollapsibleVariantProps, collapsible } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(collapsible)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Collapsible.RootProviderProps>, CollapsibleVariantProps>
>(Collapsible.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Collapsible.RootProps>, CollapsibleVariantProps>
>(Collapsible.Root, 'root')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Collapsible.ContentProps>>(
  Collapsible.Content,
  'content',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Collapsible.TriggerProps>>(
  Collapsible.Trigger,
  'trigger',
)

export { CollapsibleContext as Context } from '@ark-ui/solid'
