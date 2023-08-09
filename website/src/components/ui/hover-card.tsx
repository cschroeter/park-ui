import * as Ark from '@ark-ui/react/hover-card'
import { styled } from 'styled-system/jsx'
import { hoverCard, type HoverCardVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/hover-card'

const { withProvider, withContext } = createStyleContext(hoverCard)

export type HoverCardProps = Ark.HoverCardProps & HoverCardVariantProps

const HoverCardRoot = withProvider(styled(Ark.HoverCard.Root), 'root')
const HoverCardArrow = withContext(styled(Ark.HoverCard.Arrow), 'arrow')
const HoverCardArrowTip = withContext(styled(Ark.HoverCard.ArrowTip), 'arrowTip')
const HoverCardContent = withContext(styled(Ark.HoverCard.Content), 'content')
const HoverCardPositioner = withContext(styled(Ark.HoverCard.Positioner), 'positioner')
const HoverCardTrigger = withContext(styled(Ark.HoverCard.Trigger), 'trigger')

const HoverCard = Object.assign(HoverCardRoot, {
  Root: HoverCardRoot,
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Trigger: HoverCardTrigger,
})

export {
  HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardPositioner,
  HoverCardTrigger,
}
