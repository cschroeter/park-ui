import { Splitter as ArkSplitter } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

const Root = withProvider(styled(ArkSplitter.Root), 'root')
const Panel = withContext(styled(ArkSplitter.Panel), 'panel')
const ResizeTrigger = withContext(styled(ArkSplitter.ResizeTrigger), 'resizeTrigger')

export { Panel, ResizeTrigger, Root }
