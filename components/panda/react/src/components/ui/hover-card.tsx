import { HoverCard as ArkHoverCard } from '@ark-ui/react/hover-card'
import type { ComponentProps } from 'react'
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

export interface HoverCardRootProps extends ComponentProps<typeof Root> {}
export interface HoverCardArrowProps extends ComponentProps<typeof Arrow> {}
export interface HoverCardArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface HoverCardContentProps extends ComponentProps<typeof Content> {}
export interface HoverCardPositionerProps extends ComponentProps<typeof Positioner> {}
export interface HoverCardTriggerProps extends ComponentProps<typeof Trigger> {}
