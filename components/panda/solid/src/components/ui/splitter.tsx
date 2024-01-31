import { Splitter } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(splitter)

const Root = withProvider(styled(Splitter.Root), 'root')
const Panel = withContext(styled(Splitter.Panel), 'panel')
const ResizeTrigger = withContext(styled(Splitter.ResizeTrigger), 'resizeTrigger')

export { Panel, ResizeTrigger, Root }
