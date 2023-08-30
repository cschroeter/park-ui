import * as Ark from '@ark-ui/solid/splitter'
import { styled } from 'styled-system/jsx'
import { splitter, type SplitterVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

export * from '@ark-ui/solid/splitter'
export type SplitterProps = Ark.SplitterProps & SplitterVariantProps

const SplitterRoot = withProvider(styled(Ark.Splitter), 'root')
export const SplitterPanel = withContext(styled(Ark.SplitterPanel), 'panel')
export const SplitterResizeTrigger = withContext(styled(Ark.SplitterResizeTrigger), 'resizeTrigger')

export const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
})
