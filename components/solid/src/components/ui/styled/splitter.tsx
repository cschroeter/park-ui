import { type Assign, Splitter } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SplitterVariantProps, splitter } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Splitter.RootProviderBaseProps>, SplitterVariantProps>
>(Splitter.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, Splitter.RootBaseProps>, SplitterVariantProps>
>(Splitter.Root, 'root')

export const Panel = withContext<Assign<HTMLStyledProps<'div'>, Splitter.PanelBaseProps>>(
  Splitter.Panel,
  'panel',
)

export const ResizeTrigger = withContext<
  Assign<HTMLStyledProps<'button'>, Splitter.ResizeTriggerBaseProps>
>(Splitter.ResizeTrigger, 'resizeTrigger')

export { SplitterContext as Context } from '@ark-ui/solid'
