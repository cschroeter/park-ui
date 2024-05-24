import { Splitter } from '@ark-ui/react/splitter'
import type { ComponentProps } from 'react'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const splitter = tv(
  {
    base: 'splitter',
    slots: {
      root: 'splitter__root',
      panel: 'splitter__panel',
      resizeTrigger: 'splitter__resizeTrigger',
    },
    variants: {},
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(splitter)

export interface RootProps extends Splitter.RootProps, VariantProps<typeof splitter> {}
export const Root = withProvider<HTMLDivElement, RootProps>(Splitter.Root, 'root')

export const Panel = withContext<HTMLDivElement, Splitter.PanelProps>(Splitter.Panel, 'panel')

export const ResizeTrigger = withContext<HTMLButtonElement, Splitter.ResizeTriggerProps>(
  Splitter.ResizeTrigger,
  'resizeTrigger',
)

export {
  SplitterContext as Context,
  type SplitterContextProps as ContextProps,
} from '@ark-ui/react/splitter'
