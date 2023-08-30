import * as Ark from '@ark-ui/solid/hover-card'
import { styled } from 'styled-system/jsx'
import { hoverCard, type HoverCardVariantProps } from 'styled-system/recipes'

import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)

export * from '@ark-ui/solid/hover-card'
export type HoverCardProps = Ark.HoverCardProps & HoverCardVariantProps

const HoverCardRoot = withProvider(styled(Ark.HoverCard), 'root')
export const HoverCardArrow = withContext(styled(Ark.HoverCardArrow), 'arrow')
export const HoverCardArrowTip = withContext(styled(Ark.HoverCardArrowTip), 'arrowTip')
export const HoverCardContent = withContext(styled(Ark.HoverCardContent), 'content')
export const HoverCardPositioner = withContext(styled(Ark.HoverCardPositioner), 'positioner')
export const HoverCardTrigger = withContext(styled(Ark.HoverCardTrigger), 'trigger')

export const HoverCard = Object.assign(HoverCardRoot, {
  Root: HoverCardRoot,
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Trigger: HoverCardTrigger,
})
