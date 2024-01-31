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

const Root = withProvider(ArkHoverCard.Root)
const Arrow = withContext(ArkHoverCard.Arrow, 'arrow')
const ArrowTip = withContext(ArkHoverCard.ArrowTip, 'arrowTip')
const Content = withContext(ArkHoverCard.Content, 'content')
const Positioner = withContext(ArkHoverCard.Positioner, 'positioner')
const Trigger = withContext(ArkHoverCard.Trigger, 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
