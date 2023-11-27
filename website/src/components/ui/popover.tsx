import { Popover as ArkPopover } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { popover } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

export const PopoverRoot = withProvider(ArkPopover.Root)
export const PopoverAnchor = withContext(styled(ArkPopover.Anchor), 'anchor')
export const PopoverArrow = withContext(styled(ArkPopover.Arrow), 'arrow')
export const PopoverArrowTip = withContext(styled(ArkPopover.ArrowTip), 'arrowTip')
export const PopoverCloseTrigger = withContext(styled(ArkPopover.CloseTrigger), 'closeTrigger')
export const PopoverContent = withContext(styled(ArkPopover.Content), 'content')
export const PopoverDescription = withContext(styled(ArkPopover.Description), 'description')
export const PopoverIndicator = withContext(styled(ArkPopover.Indicator), 'indicator')
export const PopoverPositioner = withContext(styled(ArkPopover.Positioner), 'positioner')
export const PopoverTitle = withContext(styled(ArkPopover.Title), 'title')
export const PopoverTrigger = withContext(styled(ArkPopover.Trigger), 'trigger')

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Indicator: PopoverIndicator,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
})

export type PopoverProps = typeof PopoverRoot
export type PopoverAnchorProps = typeof PopoverAnchor
export type PopoverArrowProps = typeof PopoverArrow
export type PopoverArrowTipProps = typeof PopoverArrowTip
export type PopoverCloseTriggerProps = typeof PopoverCloseTrigger
export type PopoverContentProps = typeof PopoverContent
export type PopoverDescriptionProps = typeof PopoverDescription
export type PopoverIndicatorProps = typeof PopoverIndicator
export type PopoverPositionerProps = typeof PopoverPositioner
export type PopoverTitleProps = typeof PopoverTitle
export type PopoverTriggerProps = typeof PopoverTrigger
