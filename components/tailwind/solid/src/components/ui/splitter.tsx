import { Splitter } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Splitter.Root, 'root')
export const Panel = withContext(Splitter.Panel, 'panel')
export const ResizeTrigger = withContext(Splitter.ResizeTrigger, 'resizeTrigger')

export type RootProps = ComponentProps<typeof Root>
export interface PanelProps extends ComponentProps<typeof Panel> {}
export interface ResizeTriggerProps extends ComponentProps<typeof ResizeTrigger> {}
