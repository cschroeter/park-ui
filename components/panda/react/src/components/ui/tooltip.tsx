import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { tooltip } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(tooltip)

const Root = withProvider(ArkTooltip.Root)
const Arrow = withContext(styled(ArkTooltip.Arrow), 'arrow')
const ArrowTip = withContext(styled(ArkTooltip.ArrowTip), 'arrowTip')
const Content = withContext(styled(ArkTooltip.Content), 'content')
const Positioner = withContext(styled(ArkTooltip.Positioner), 'positioner')
const Trigger = withContext(styled(ArkTooltip.Trigger), 'trigger')

export { Arrow, ArrowTip, Content, Positioner, Root, Trigger }

export interface TooltipRootProps extends ComponentProps<typeof Root> {}
export interface TooltipArrowProps extends ComponentProps<typeof Arrow> {}
export interface TooltipArrowTipProps extends ComponentProps<typeof ArrowTip> {}
export interface TooltipContentProps extends ComponentProps<typeof Content> {}
export interface TooltipPositionerProps extends ComponentProps<typeof Positioner> {}
export interface TooltipTriggerProps extends ComponentProps<typeof Trigger> {}
