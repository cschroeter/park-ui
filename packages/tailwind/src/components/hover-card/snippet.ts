import * as Ark from '@ark-ui/react/hover-card'
import { createStyleContext } from '~/lib/create-style-context'
import { hoverCardStyles } from './recipe'
export * from '@ark-ui/react/hover-card'

export type HoverCardProps = React.ComponentProps<typeof HoverCard>

const { withProvider, withContext } = createStyleContext(hoverCardStyles)

const HoverCardRoot = withProvider(Ark.HoverCard.Root, 'root')
export const HoverCardArrow = withContext(Ark.HoverCard.Arrow, 'arrow')
export const HoverCardArrowTip = withContext(Ark.HoverCard.ArrowTip, 'arrowTip')
export const HoverCardContent = withContext(Ark.HoverCard.Content, 'content')
export const HoverCardPositioner = withContext(Ark.HoverCard.Positioner, 'positioner')
export const HoverCardTrigger = withContext(Ark.HoverCard.Trigger, 'trigger')

export const HoverCard = Object.assign(HoverCardRoot, {
  Root: HoverCardRoot,
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Trigger: HoverCardTrigger,
})
