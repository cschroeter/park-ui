import { HoverCard } from '@ark-ui/react/hover-card'
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

const Root = withProvider(HoverCard.Root)
const Arrow = withContext(HoverCard.Arrow, 'arrow')
const ArrowTip = withContext(HoverCard.ArrowTip, 'arrowTip')
const Content = withContext(HoverCard.Content, 'content')
const Positioner = withContext(HoverCard.Positioner, 'positioner')
const Trigger = withContext(HoverCard.Trigger, 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
