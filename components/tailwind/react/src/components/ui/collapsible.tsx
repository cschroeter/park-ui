import { Collapsible } from '@ark-ui/react/collapsible'
import type { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Collapsible.Root, 'root')
export const Content = withContext(Collapsible.Content, 'content')
export const Trigger = withContext(Collapsible.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
