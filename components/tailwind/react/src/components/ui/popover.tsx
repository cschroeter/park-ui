import { Popover as ArkPopover } from '@ark-ui/react/popover'
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

const Root = withProvider(ArkPopover.Root)
const Anchor = withContext(ArkPopover.Anchor, 'anchor')
const Arrow = withContext(ArkPopover.Arrow, 'arrow')
const ArrowTip = withContext(ArkPopover.ArrowTip, 'arrowTip')
const CloseTrigger = withContext(ArkPopover.CloseTrigger, 'closeTrigger')
const Content = withContext(ArkPopover.Content, 'content')
const Description = withContext(ArkPopover.Description, 'description')
const Indicator = withContext(ArkPopover.Indicator, 'indicator')
const Positioner = withContext(ArkPopover.Positioner, 'positioner')
const Title = withContext(ArkPopover.Title, 'title')
const Trigger = withContext(ArkPopover.Trigger, 'trigger')

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
