import { Popover as ArkPopover } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { popover } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

const Popover = withProvider(ArkPopover.Root)
const PopoverAnchor = withContext(styled(ArkPopover.Anchor), 'anchor')
const PopoverArrow = withContext(styled(ArkPopover.Arrow), 'arrow')
const PopoverArrowTip = withContext(styled(ArkPopover.ArrowTip), 'arrowTip')
const PopoverCloseTrigger = withContext(styled(ArkPopover.CloseTrigger), 'closeTrigger')
const PopoverContent = withContext(styled(ArkPopover.Content), 'content')
const PopoverDescription = withContext(styled(ArkPopover.Description), 'description')
const PopoverIndicator = withContext(styled(ArkPopover.Indicator), 'indicator')
const PopoverPositioner = withContext(styled(ArkPopover.Positioner), 'positioner')
const PopoverTitle = withContext(styled(ArkPopover.Title), 'title')
const PopoverTrigger = withContext(styled(ArkPopover.Trigger), 'trigger')

const Root = Popover
const Anchor = PopoverAnchor
const Arrow = PopoverArrow
const ArrowTip = PopoverArrowTip
const CloseTrigger = PopoverCloseTrigger
const Content = PopoverContent
const Description = PopoverDescription
const Indicator = PopoverIndicator
const Positioner = PopoverPositioner
const Title = PopoverTitle
const Trigger = PopoverTrigger

export {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverIndicator,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  Positioner,
  Root,
  Title,
  Trigger,
}

export interface PopoverProps extends ComponentProps<typeof Popover> {}
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
