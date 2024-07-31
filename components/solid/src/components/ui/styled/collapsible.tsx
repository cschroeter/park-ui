import { type Assign, Collapsible } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type CollapsibleVariantProps, collapsible } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(collapsible)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Collapsible.RootProviderBaseProps>, CollapsibleVariantProps>
>(Collapsible.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Collapsible.RootBaseProps>, CollapsibleVariantProps>
>(Collapsible.Root, 'root')

export const Content = withContext<Assign<HTMLStyledProps<'div'>, Collapsible.ContentBaseProps>>(
  Collapsible.Content,
  'content',
)

export const Trigger = withContext<Assign<HTMLStyledProps<'button'>, Collapsible.TriggerBaseProps>>(
  Collapsible.Trigger,
  'trigger',
)

export { CollapsibleContext as Context } from '@ark-ui/solid'
