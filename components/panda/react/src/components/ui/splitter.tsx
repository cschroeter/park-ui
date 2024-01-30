import { Splitter as ArkSplitter } from '@ark-ui/react/splitter'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export const SplitterRoot = withProvider(styled(ArkSplitter.Root), 'root')
export const SplitterPanel = withContext(styled(ArkSplitter.Panel), 'panel')
export const SplitterResizeTrigger = withContext(styled(ArkSplitter.ResizeTrigger), 'resizeTrigger')

export const Splitter = {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
}

export interface SplitterRootProps extends ComponentProps<typeof SplitterRoot> {}
export interface SplitterPanelProps extends ComponentProps<typeof SplitterPanel> {}
export interface SplitterResizeTriggerProps extends ComponentProps<typeof SplitterResizeTrigger> {}
