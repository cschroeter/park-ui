'use client'
import { Splitter } from '@ark-ui/react/splitter'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { splitter } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(splitter)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Splitter.Root, 'root')
export const RootProvider = withProvider(Splitter.RootProvider, 'root')
export const Panel = withContext(Splitter.Panel, 'panel')
export const ResizeTrigger = withContext(Splitter.ResizeTrigger, 'resizeTrigger')

export { SplitterContext as Context } from '@ark-ui/react/splitter'
