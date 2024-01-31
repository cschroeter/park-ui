import { HoverCard } from '@ark-ui/react/hover-card'
import { styled } from 'styled-system/jsx'
import { hoverCard } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)

const Root = withProvider(HoverCard.Root)
const Arrow = withContext(styled(HoverCard.Arrow), 'arrow')
const ArrowTip = withContext(styled(HoverCard.ArrowTip), 'arrowTip')
const Content = withContext(styled(HoverCard.Content), 'content')
const Positioner = withContext(styled(HoverCard.Positioner), 'positioner')
const Trigger = withContext(styled(HoverCard.Trigger), 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
