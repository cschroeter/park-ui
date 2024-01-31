import { Popover as ArkPopover } from '@ark-ui/react/popover'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { popover } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

const Root = withProvider(ArkPopover.Root)
const Anchor = withContext(styled(ArkPopover.Anchor), 'anchor')
const Arrow = withContext(styled(ArkPopover.Arrow), 'arrow')
const ArrowTip = withContext(styled(ArkPopover.ArrowTip), 'arrowTip')
const CloseTrigger = withContext(styled(ArkPopover.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(ArkPopover.Content), 'content')
const Description = withContext(styled(ArkPopover.Description), 'description')
const Indicator = withContext(styled(ArkPopover.Indicator), 'indicator')
const Positioner = withContext(styled(ArkPopover.Positioner), 'positioner')
const Title = withContext(styled(ArkPopover.Title), 'title')
const Trigger = withContext(styled(ArkPopover.Trigger), 'trigger')

export {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Positioner,
  Root,
  Title,
  Trigger,
}

export interface PopoverRootProps extends ComponentProps<typeof Root> {}
export interface PopoverAnchorProps extends ComponentProps<typeof Anchor> {}
export interface PopoverArrowProps extends ComponentProps<typeof Arrow> {}
export interface PopoverArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface PopoverCloseTriggerProps extends ComponentProps<typeof CloseTrigger> {}
export interface PopoverContentProps extends ComponentProps<typeof Content> {}
export interface PopoverDescriptionProps extends ComponentProps<typeof Description> {}
export interface PopoverIndicatorProps extends ComponentProps<typeof Indicator> {}
export interface PopoverPositionerProps extends ComponentProps<typeof Positioner> {}
export interface PopoverTitleProps extends ComponentProps<typeof Title> {}
export interface PopoverTriggerProps extends ComponentProps<typeof Trigger> {}
