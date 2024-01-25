import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'
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

const HoverCard = withProvider(ArkHoverCard.Root)
const HoverCardArrow = withContext(ArkHoverCard.Arrow, 'arrow')
const HoverCardArrowTip = withContext(ArkHoverCard.ArrowTip, 'arrowTip')
const HoverCardContent = withContext(ArkHoverCard.Content, 'content')
const HoverCardPositioner = withContext(ArkHoverCard.Positioner, 'positioner')
const HoverCardTrigger = withContext(ArkHoverCard.Trigger, 'trigger')

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
