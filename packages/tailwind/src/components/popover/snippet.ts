import * as Ark from '@ark-ui/react/popover'
import { createStyleContext } from '~/lib/create-style-context'
import { popoverStyles } from './recipe'
export * from '@ark-ui/react/popover'

export type PopoverProps = React.ComponentProps<typeof Popover>

const { withProvider, withContext } = createStyleContext(popoverStyles)

const PopoverRoot = withProvider(Ark.Popover.Root)
export const PopoverAnchor = withContext(Ark.Popover.Anchor, 'anchor')
export const PopoverArrow = withContext(Ark.Popover.Arrow, 'arrow')
export const PopoverArrowTip = withContext(Ark.Popover.ArrowTip, 'arrowTip')
export const PopoverCloseTrigger = withContext(Ark.Popover.CloseTrigger, 'closeTrigger')
export const PopoverContent = withContext(Ark.Popover.Content, 'content')
export const PopoverDescription = withContext(Ark.Popover.Description, 'description')
export const PopoverPositioner = withContext(Ark.Popover.Positioner, 'positioner')
export const PopoverTitle = withContext(Ark.Popover.Title, 'title')
export const PopoverTrigger = withContext(Ark.Popover.Trigger, 'trigger')

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
})
