import * as Ark from '@ark-ui/solid/popover'
import { styled } from 'styled-system/jsx'
import { popover, type PopoverVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

export * from '@ark-ui/solid/popover'
export type PopoverProps = Ark.PopoverProps & PopoverVariantProps

const PopoverRoot = withProvider(styled(Ark.Popover), 'root')
export const PopoverAnchor = withContext(styled(Ark.PopoverAnchor), 'anchor')
export const PopoverArrow = withContext(styled(Ark.PopoverArrow), 'arrow')
export const PopoverArrowTip = withContext(styled(Ark.PopoverArrowTip), 'arrowTip')
export const PopoverCloseTrigger = withContext(styled(Ark.PopoverCloseTrigger), 'closeTrigger')
export const PopoverContent = withContext(styled(Ark.PopoverContent), 'content')
export const PopoverDescription = withContext(styled(Ark.PopoverDescription), 'description')
export const PopoverPositioner = withContext(styled(Ark.PopoverPositioner), 'positioner')
export const PopoverTitle = withContext(styled(Ark.PopoverTitle), 'title')
export const PopoverTrigger = withContext(styled(Ark.PopoverTrigger), 'trigger')

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
})
