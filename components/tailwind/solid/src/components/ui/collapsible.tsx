import { Collapsible } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const collapsible = tv(
  {
    base: 'collapsible',
    slots: {
      root: 'collapsible__root',
      trigger: 'collapsible__trigger',
      content: 'collapsible__content',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(collapsible)

export interface RootProps extends Collapsible.RootProps, VariantProps<typeof collapsible> {}
export const Root = withProvider<RootProps>(Collapsible.Root, 'root')

export const Content = withContext<Collapsible.ContentProps>(Collapsible.Content, 'content')

export const Trigger = withContext<Collapsible.TriggerProps>(Collapsible.Trigger, 'trigger')

export {
  CollapsibleContext as Context,
  type CollapsibleContextProps as ContextProps,
} from '@ark-ui/solid'
