import { HoverCard as ArkHoverCard } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { hoverCard } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)

const HoverCard = withProvider(ArkHoverCard.Root)
const HoverCardArrow = withContext(styled(ArkHoverCard.Arrow), 'arrow')
const HoverCardArrowTip = withContext(styled(ArkHoverCard.ArrowTip), 'arrowTip')
const HoverCardContent = withContext(styled(ArkHoverCard.Content), 'content')
const HoverCardPositioner = withContext(styled(ArkHoverCard.Positioner), 'positioner')
const HoverCardTrigger = withContext(styled(ArkHoverCard.Trigger), 'trigger')

const Root = HoverCard
const Arrow = HoverCardArrow
const ArrowTip = HoverCardArrowTip
const Content = HoverCardContent
const Positioner = HoverCardPositioner
const Trigger = HoverCardTrigger

export {
  Arrow,
  ArrowTip,
  Content,
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
  Positioner,
  Root,
  Trigger,
}

export interface HoverCardProps extends ComponentProps<typeof HoverCard> {}
export interface HoverCardArrowProps extends ComponentProps<typeof HoverCardArrow> {}
export interface HoverCardArrowTipProps extends ComponentProps<typeof HoverCardArrowTip> {}
export interface HoverCardContentProps extends ComponentProps<typeof HoverCardContent> {}
export interface HoverCardPositionerProps extends ComponentProps<typeof HoverCardPositioner> {}
export interface HoverCardTriggerProps extends ComponentProps<typeof HoverCardTrigger> {}
