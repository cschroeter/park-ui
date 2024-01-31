import { Tooltip } from '@ark-ui/react/tooltip'
import { styled } from 'styled-system/jsx'
import { tooltip } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

const Root = withProvider(Tooltip.Root)
const Arrow = withContext(styled(Tooltip.Arrow), 'arrow')
const ArrowTip = withContext(styled(Tooltip.ArrowTip), 'arrowTip')
const Content = withContext(styled(Tooltip.Content), 'content')
const Positioner = withContext(styled(Tooltip.Positioner), 'positioner')
const Trigger = withContext(styled(Tooltip.Trigger), 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
