import { type Assign, Collapsible } from '@ark-ui/solid'
import { type CollapsibleVariantProps, collapsible } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(collapsible)

export interface RootProps
  extends Assign<JsxStyleProps, Collapsible.RootProps>,
    CollapsibleVariantProps {}
export const Root = withProvider<RootProps>(Collapsible.Root, 'root')

export const Content = withContext<Assign<JsxStyleProps, Collapsible.ContentProps>>(
  Collapsible.Content,
  'content',
)

export const Trigger = withContext<Assign<JsxStyleProps, Collapsible.TriggerProps>>(
  Collapsible.Trigger,
  'trigger',
)

export {
  CollapsibleContext as Context,
  type CollapsibleContextProps as ContextProps,
} from '@ark-ui/solid'
