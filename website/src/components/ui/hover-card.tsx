import { HoverCard as ArkHoverCard } from '@ark-ui/react'
import { styled } from 'styled-system/jsx'
import { hoverCard } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)

export const HoverCardRoot = withProvider(ArkHoverCard.Root)
export const HoverCardArrow = withContext(styled(ArkHoverCard.Arrow), 'arrow')
export const HoverCardArrowTip = withContext(styled(ArkHoverCard.ArrowTip), 'arrowTip')
export const HoverCardContent = withContext(styled(ArkHoverCard.Content), 'content')
export const HoverCardPositioner = withContext(styled(ArkHoverCard.Positioner), 'positioner')
export const HoverCardTrigger = withContext(styled(ArkHoverCard.Trigger), 'trigger')

export const HoverCard = Object.assign(HoverCardRoot, {
  Root: HoverCardRoot,
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Trigger: HoverCardTrigger,
})

export type HoverCardProps = typeof HoverCardRoot
export type HoverCardArrowProps = typeof HoverCardArrow
export type HoverCardArrowTipProps = typeof HoverCardArrowTip
export type HoverCardContentProps = typeof HoverCardContent
export type HoverCardPositionerProps = typeof HoverCardPositioner
export type HoverCardTriggerProps = typeof HoverCardTrigger
