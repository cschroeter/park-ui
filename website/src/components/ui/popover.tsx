import { Popover as ArkPopover } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
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

export interface PopoverProps extends HTMLStyledProps<typeof Popover> {}
export interface PopoverAnchorProps extends HTMLStyledProps<typeof PopoverAnchor> {}
export interface PopoverArrowProps extends HTMLStyledProps<typeof PopoverArrow> {}
export interface PopoverArrowTipProps extends HTMLStyledProps<typeof PopoverArrowTip> {}
export interface PopoverCloseTriggerProps extends HTMLStyledProps<typeof PopoverCloseTrigger> {}
export interface PopoverContentProps extends HTMLStyledProps<typeof PopoverContent> {}
export interface PopoverDescriptionProps extends HTMLStyledProps<typeof PopoverDescription> {}
export interface PopoverIndicatorProps extends HTMLStyledProps<typeof PopoverIndicator> {}
export interface PopoverPositionerProps extends HTMLStyledProps<typeof PopoverPositioner> {}
export interface PopoverTitleProps extends HTMLStyledProps<typeof PopoverTitle> {}
export interface PopoverTriggerProps extends HTMLStyledProps<typeof PopoverTrigger> {}
