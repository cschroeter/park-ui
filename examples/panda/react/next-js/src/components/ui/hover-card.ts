import { HoverCard as ArkHoverCard } from '@ark-ui/react'
import { styled, type HTMLStyledProps } from 'styled-system/jsx'
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

export interface HoverCardProps extends HTMLStyledProps<typeof HoverCard> {}
export interface HoverCardArrowProps extends HTMLStyledProps<typeof HoverCardArrow> {}
export interface HoverCardArrowTipProps extends HTMLStyledProps<typeof HoverCardArrowTip> {}
export interface HoverCardContentProps extends HTMLStyledProps<typeof HoverCardContent> {}
export interface HoverCardPositionerProps extends HTMLStyledProps<typeof HoverCardPositioner> {}
export interface HoverCardTriggerProps extends HTMLStyledProps<typeof HoverCardTrigger> {}
