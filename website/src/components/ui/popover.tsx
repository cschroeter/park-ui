import * as Ark from '@ark-ui/react/popover'
import { styled } from 'styled-system/jsx'
import { popover, type PopoverVariantProps } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

export * from '@ark-ui/react/popover'

const { withProvider, withContext } = createStyleContext(popover)

export type PopoverProps = Ark.PopoverProps & PopoverVariantProps

const PopoverRoot = withProvider(styled(Ark.Popover.Root), 'root')
const PopoverAnchor = withContext(styled(Ark.Popover.Anchor), 'anchor')
const PopoverArrow = withContext(styled(Ark.Popover.Arrow), 'arrow')
const PopoverArrowTip = withContext(styled(Ark.Popover.ArrowTip), 'arrowTip')
const PopoverCloseTrigger = withContext(styled(Ark.Popover.CloseTrigger), 'closeTrigger')
const PopoverContent = withContext(styled(Ark.Popover.Content), 'content')
const PopoverDescription = withContext(styled(Ark.Popover.Description), 'description')
const PopoverPositioner = withContext(styled(Ark.Popover.Positioner), 'positioner')
const PopoverTitle = withContext(styled(Ark.Popover.Title), 'title')
const PopoverTrigger = withContext(styled(Ark.Popover.Trigger), 'trigger')

const Popover = Object.assign(PopoverRoot, {
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

export {
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
}
