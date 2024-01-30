import { Popover as ArkPopover } from '@ark-ui/react/popover'
import type { ComponentProps } from 'react'
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

export const Popover = {
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
}

export interface PopoverRootProps extends ComponentProps<typeof PopoverRoot> {}
export interface PopoverAnchorProps extends ComponentProps<typeof PopoverAnchor> {}
export interface PopoverArrowProps extends ComponentProps<typeof PopoverArrow> {}
export interface PopoverArrowTipProps extends ComponentProps<typeof PopoverArrowTip> {}
export interface PopoverCloseTriggerProps extends ComponentProps<typeof PopoverCloseTrigger> {}
export interface PopoverContentProps extends ComponentProps<typeof PopoverContent> {}
export interface PopoverDescriptionProps extends ComponentProps<typeof PopoverDescription> {}
export interface PopoverIndicatorProps extends ComponentProps<typeof PopoverIndicator> {}
export interface PopoverPositionerProps extends ComponentProps<typeof PopoverPositioner> {}
export interface PopoverTitleProps extends ComponentProps<typeof PopoverTitle> {}
export interface PopoverTriggerProps extends ComponentProps<typeof PopoverTrigger> {}
