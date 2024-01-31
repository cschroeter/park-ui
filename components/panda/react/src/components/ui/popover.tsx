import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { styled } from 'styled-system/jsx'
import { popover } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(popover)

const Root = withProvider(ArkPopover.Root)
const Anchor = withContext(styled(ArkPopover.Anchor), 'anchor')
const Arrow = withContext(styled(ArkPopover.Arrow), 'arrow')
const ArrowTip = withContext(styled(ArkPopover.ArrowTip), 'arrowTip')
const CloseTrigger = withContext(styled(ArkPopover.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(ArkPopover.Content), 'content')
const Description = withContext(styled(ArkPopover.Description), 'description')
const Indicator = withContext(styled(ArkPopover.Indicator), 'indicator')
const Positioner = withContext(styled(ArkPopover.Positioner), 'positioner')
const Title = withContext(styled(ArkPopover.Title), 'title')
const Trigger = withContext(styled(ArkPopover.Trigger), 'trigger')

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
