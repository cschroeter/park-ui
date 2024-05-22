import { type Assign, Splitter } from '@ark-ui/solid'
import { type SplitterVariantProps, splitter } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export interface RootProps
  extends Assign<JsxStyleProps, Splitter.RootProps>,
    SplitterVariantProps {}
export const Root = withProvider<RootProps>(Splitter.Root, 'root')

export const Panel = withContext<Assign<JsxStyleProps, Splitter.PanelProps>>(
  Splitter.Panel,
  'panel',
)

export const ResizeTrigger = withContext<Assign<JsxStyleProps, Splitter.ResizeTriggerProps>>(
  Splitter.ResizeTrigger,
  'resizeTrigger',
)

export {
  SplitterContext as Context,
  type SplitterContextProps as ContextProps,
} from '@ark-ui/solid'
