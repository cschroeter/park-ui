'use client'
import { Collapsible } from '@ark-ui/react/collapsible'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { collapsible } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(collapsible)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Collapsible.Root, 'root')
export const RootProvider = withProvider(Collapsible.RootProvider, 'root')
export const Content = withContext(Collapsible.Content, 'content')
export const Indicator = withContext(Collapsible.Indicator, 'indicator')
export const Trigger = withContext(Collapsible.Trigger, 'trigger')

export { CollapsibleContext as Context } from '@ark-ui/react/collapsible'
