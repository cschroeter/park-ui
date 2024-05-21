import { Popover } from '@ark-ui/react/popover'
import { styled } from 'styled-system/jsx'
import { type PopoverVariantProps, popover } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(popover)

export interface RootProps extends Popover.RootProps, PopoverVariantProps {}

export const Root = withRootProvider<RootProps>(Popover.Root)
export const Anchor = withContext(styled(Popover.Anchor), 'anchor')
export const Arrow = withContext(styled(Popover.Arrow), 'arrow')
export const ArrowTip = withContext(styled(Popover.ArrowTip), 'arrowTip')
export const CloseTrigger = withContext(styled(Popover.CloseTrigger), 'closeTrigger')
export const Content = withContext(styled(Popover.Content), 'content')
export const Description = withContext(styled(Popover.Description), 'description')
export const Indicator = withContext(styled(Popover.Indicator), 'indicator')
export const Positioner = withContext(styled(Popover.Positioner), 'positioner')
export const Title = withContext(styled(Popover.Title), 'title')
export const Trigger = withContext(styled(Popover.Trigger), 'trigger')
