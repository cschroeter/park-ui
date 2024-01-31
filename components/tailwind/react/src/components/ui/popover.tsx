import { Popover } from '@ark-ui/react/popover'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'popover',
  slots: {
    arrow: 'popover__arrow',
    arrowTip: 'popover__arrowTip',
    anchor: 'popover__anchor',
    trigger: 'popover__trigger',
    indicator: 'popover__indicator',
    positioner: 'popover__positioner',
    content: 'popover__content',
    title: 'popover__title',
    description: 'popover__description',
    closeTrigger: 'popover__closeTrigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(Popover.Root)
const Anchor = withContext(Popover.Anchor, 'anchor')
const Arrow = withContext(Popover.Arrow, 'arrow')
const ArrowTip = withContext(Popover.ArrowTip, 'arrowTip')
const CloseTrigger = withContext(Popover.CloseTrigger, 'closeTrigger')
const Content = withContext(Popover.Content, 'content')
const Description = withContext(Popover.Description, 'description')
const Indicator = withContext(Popover.Indicator, 'indicator')
const Positioner = withContext(Popover.Positioner, 'positioner')
const Title = withContext(Popover.Title, 'title')
const Trigger = withContext(Popover.Trigger, 'trigger')

export {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Positioner,
  Root,
  Title,
  Trigger,
}
