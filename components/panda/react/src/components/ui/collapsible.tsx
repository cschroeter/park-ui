import { Collapsible, type CollapsibleRootProps } from '@ark-ui/react/collapsible'
import { collapsible } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(collapsible)

export interface RootProps
  extends Assign<JsxStyleProps, Collapsible.RootProps>,
    CollapsibleRootProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Collapsible.Root, 'root')

export interface ContentProps extends Assign<JsxStyleProps, Collapsible.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Collapsible.Content, 'content')

export interface TriggerProps extends Assign<JsxStyleProps, Collapsible.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Collapsible.Trigger, 'trigger')

export {
  CollapsibleContext as Context,
  type CollapsibleContextProps as ContextProps,
} from '@ark-ui/react/collapsible'
