import { HoverCard as ArkHoverCard } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'hoverCard',
  slots: {
    arrow: 'hoverCard__arrow',
    arrowTip: 'hoverCard__arrowTip',
    trigger: 'hoverCard__trigger',
    positioner: 'hoverCard__positioner',
    content: 'hoverCard__content',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const HoverCardRoot = withProvider(ArkHoverCard.Root)
export const HoverCardArrow = withContext(ArkHoverCard.Arrow, 'arrow')
export const HoverCardArrowTip = withContext(ArkHoverCard.ArrowTip, 'arrowTip')
export const HoverCardContent = withContext(ArkHoverCard.Content, 'content')
export const HoverCardPositioner = withContext(ArkHoverCard.Positioner, 'positioner')
export const HoverCardTrigger = withContext(ArkHoverCard.Trigger, 'trigger')

export const HoverCard = Object.assign(HoverCardRoot, {
  Root: HoverCardRoot,
  Arrow: HoverCardArrow,
  ArrowTip: HoverCardArrowTip,
  Content: HoverCardContent,
  Positioner: HoverCardPositioner,
  Trigger: HoverCardTrigger,
})
