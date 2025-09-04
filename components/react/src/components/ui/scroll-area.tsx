'use client'
import { ScrollArea } from '@ark-ui/react/scroll-area'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { scrollArea } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(scrollArea)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(ScrollArea.Root, 'root')
export const RootProvider = withProvider(ScrollArea.Root, 'root')
export const Content = withContext(ScrollArea.Content, 'content')
export const Corner = withContext(ScrollArea.Corner, 'corner')
export const Scrollbar = withContext(ScrollArea.Scrollbar, 'scrollbar')
export const Thumb = withContext(ScrollArea.Thumb, 'thumb')
export const Viewport = withContext(ScrollArea.Viewport, 'viewport')

export { ScrollAreaContext as Context } from '@ark-ui/react/scroll-area'
