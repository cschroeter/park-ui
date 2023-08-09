import * as Ark from '@ark-ui/react/splitter'
import { styled } from 'styled-system/jsx'
import { splitter, type SplitterVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/splitter'

const { withProvider, withContext } = createStyleContext(splitter)

export type SplitterProps = Ark.SplitterProps & SplitterVariantProps

const SplitterRoot = withProvider(styled(Ark.Splitter.Root), 'root')
const SplitterPanel = withContext(styled(Ark.Splitter.Panel), 'panel')
const SplitterResizeTrigger = withContext(styled(Ark.Splitter.ResizeTrigger), 'resizeTrigger')

const Splitter = Object.assign(SplitterRoot, {
  Root: SplitterRoot,
  Panel: SplitterPanel,
  ResizeTrigger: SplitterResizeTrigger,
})

export { Splitter, SplitterPanel, SplitterResizeTrigger }
