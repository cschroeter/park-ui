import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('HoverCard')

const HoverCard = withProvider(ArkHoverCard.Root)
const HoverCardArrow = withContext(chakra(ArkHoverCard.Arrow), 'arrow')
const HoverCardArrowTip = withContext(chakra(ArkHoverCard.ArrowTip), 'arrowTip')
const HoverCardContent = withContext(chakra(ArkHoverCard.Content), 'content')
const HoverCardPositioner = withContext(chakra(ArkHoverCard.Positioner), 'positioner')
const HoverCardTrigger = withContext(chakra(ArkHoverCard.Trigger), 'trigger')

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

export interface HoverCardProps extends HTMLChakraProps<typeof HoverCard> {}
export interface HoverCardArrowProps extends HTMLChakraProps<typeof HoverCardArrow> {}
export interface HoverCardArrowTipProps extends HTMLChakraProps<typeof HoverCardArrowTip> {}
export interface HoverCardContentProps extends HTMLChakraProps<typeof HoverCardContent> {}
export interface HoverCardPositionerProps extends HTMLChakraProps<typeof HoverCardPositioner> {}
export interface HoverCardTriggerProps extends HTMLChakraProps<typeof HoverCardTrigger> {}
