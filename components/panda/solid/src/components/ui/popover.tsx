import { Popover } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { popover } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

const Root = withProvider(Popover.Root)
const Anchor = withContext(styled(Popover.Anchor), 'anchor')
const Arrow = withContext(styled(Popover.Arrow), 'arrow')
const ArrowTip = withContext(styled(Popover.ArrowTip), 'arrowTip')
const CloseTrigger = withContext(styled(Popover.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(Popover.Content), 'content')
const Description = withContext(styled(Popover.Description), 'description')
const Indicator = withContext(styled(Popover.Indicator), 'indicator')
const Positioner = withContext(styled(Popover.Positioner), 'positioner')
const Title = withContext(styled(Popover.Title), 'title')
const Trigger = withContext(styled(Popover.Trigger), 'trigger')

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
