import { Popover as ArkPopover } from '@ark-ui/solid'
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

export const PopoverRoot = withProvider(ArkPopover.Root)
export const PopoverAnchor = withContext(ArkPopover.Anchor, 'anchor')
export const PopoverArrow = withContext(ArkPopover.Arrow, 'arrow')
export const PopoverArrowTip = withContext(ArkPopover.ArrowTip, 'arrowTip')
export const PopoverCloseTrigger = withContext(ArkPopover.CloseTrigger, 'closeTrigger')
export const PopoverContent = withContext(ArkPopover.Content, 'content')
export const PopoverDescription = withContext(ArkPopover.Description, 'description')
export const PopoverIndicator = withContext(ArkPopover.Indicator, 'indicator')
export const PopoverPositioner = withContext(ArkPopover.Positioner, 'positioner')
export const PopoverTitle = withContext(ArkPopover.Title, 'title')
export const PopoverTrigger = withContext(ArkPopover.Trigger, 'trigger')

export const Popover = Object.assign(PopoverRoot, {
  Root: PopoverRoot,
  Anchor: PopoverAnchor,
  Arrow: PopoverArrow,
  ArrowTip: PopoverArrowTip,
  CloseTrigger: PopoverCloseTrigger,
  Content: PopoverContent,
  Description: PopoverDescription,
  Indicator: PopoverIndicator,
  Positioner: PopoverPositioner,
  Title: PopoverTitle,
  Trigger: PopoverTrigger,
})
