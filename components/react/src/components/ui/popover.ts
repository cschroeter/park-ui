'use client'
import { Popover } from '@ark-ui/react/popover'
import type { ComponentProps } from 'react'
import { createStyleContext } from 'styled-system/jsx'
import { popover } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(popover)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(Popover.Root, 'root')

export const Anchor = withContext(Popover.Anchor, 'anchor')
export const Arrow = withContext(Popover.Arrow, 'arrow')
export const ArrowTip = withContext(Popover.ArrowTip, 'arrowTip')
export const CloseTrigger = withContext(Popover.CloseTrigger, 'closeTrigger')
export const Content = withContext(Popover.Content, 'content')
export const Description = withContext(Popover.Description, 'description')
export const Indicator = withContext(Popover.Indicator, 'indicator')
export const Positioner = withContext(Popover.Positioner, 'positioner')
export const Title = withContext(Popover.Title, 'title')
export const Trigger = withContext(Popover.Trigger, 'trigger')
