import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'
import { styled } from 'styled-system/jsx'
import { hoverCard } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(hoverCard)

const Root = withProvider(ArkHoverCard.Root)
const Arrow = withContext(styled(ArkHoverCard.Arrow), 'arrow')
const ArrowTip = withContext(styled(ArkHoverCard.ArrowTip), 'arrowTip')
const Content = withContext(styled(ArkHoverCard.Content), 'content')
const Positioner = withContext(styled(ArkHoverCard.Positioner), 'positioner')
const Trigger = withContext(styled(ArkHoverCard.Trigger), 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }
