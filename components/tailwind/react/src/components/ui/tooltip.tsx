import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
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

const Root = withProvider(ArkTooltip.Root)
const Arrow = withContext(ArkTooltip.Arrow, 'arrow')
const ArrowTip = withContext(ArkTooltip.ArrowTip, 'arrowTip')
const Content = withContext(ArkTooltip.Content, 'content')
const Positioner = withContext(ArkTooltip.Positioner, 'positioner')
const Trigger = withContext(ArkTooltip.Trigger, 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
