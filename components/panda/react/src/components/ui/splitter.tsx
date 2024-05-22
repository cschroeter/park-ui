import type { Assign } from '@ark-ui/react'
import { Splitter } from '@ark-ui/react/splitter'
import { type SplitterVariantProps, splitter } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export interface RootProps
  extends Assign<JsxStyleProps, Splitter.RootProps>,
    SplitterVariantProps {}
export const Root = withProvider<HTMLDivElement, RootProps>(Splitter.Root, 'root')

export interface PanelProps extends Assign<JsxStyleProps, Splitter.PanelProps> {}
export const Panel = withContext<HTMLDivElement, PanelProps>(Splitter.Panel, 'panel')

export interface ResizeTriggerProps extends Assign<JsxStyleProps, Splitter.ResizeTriggerProps> {}
export const ResizeTrigger = withContext<HTMLButtonElement, ResizeTriggerProps>(
  Splitter.ResizeTrigger,
  'resizeTrigger',
)

export {
  SplitterContext as Context,
  type SplitterContextProps as ContextProps,
} from '@ark-ui/react/splitter'
