import { HoverCard as ArkHoverCard } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
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

export const HoverCard = {
  Root: HoverCardRoot,
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Trigger: HoverCardTrigger,
}

export interface HoverCardRootProps extends ComponentProps<typeof HoverCardRoot> {}
export interface HoverCardArrowProps extends ComponentProps<typeof HoverCardArrow> {}
export interface HoverCardArrowTipProps extends ComponentProps<typeof HoverCardArrowTip> {}
export interface HoverCardContentProps extends ComponentProps<typeof HoverCardContent> {}
export interface HoverCardPositionerProps extends ComponentProps<typeof HoverCardPositioner> {}
export interface HoverCardTriggerProps extends ComponentProps<typeof HoverCardTrigger> {}
