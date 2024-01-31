import { Tooltip } from '@ark-ui/react/tooltip'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'tooltip',
  slots: {
    trigger: 'tooltip__trigger',
    arrow: 'tooltip__arrow',
    arrowTip: 'tooltip__arrowTip',
    positioner: 'tooltip__positioner',
    content: 'tooltip__content',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(Tooltip.Root)
const Arrow = withContext(Tooltip.Arrow, 'arrow')
const ArrowTip = withContext(Tooltip.ArrowTip, 'arrowTip')
const Content = withContext(Tooltip.Content, 'content')
const Positioner = withContext(Tooltip.Positioner, 'positioner')
const Trigger = withContext(Tooltip.Trigger, 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
