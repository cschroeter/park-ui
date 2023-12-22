import { Popover as ArkPopover } from '@ark-ui/react/popover'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from './create-style-context'

const { withProvider, withContext } = createStyleContext('Popover')

const Popover = withProvider(ArkPopover.Root)
const PopoverAnchor = withContext(chakra(ArkPopover.Anchor), 'anchor')
const PopoverArrow = withContext(chakra(ArkPopover.Arrow), 'arrow')
const PopoverArrowTip = withContext(chakra(ArkPopover.ArrowTip), 'arrowTip')
const PopoverCloseTrigger = withContext(chakra(ArkPopover.CloseTrigger), 'closeTrigger')
const PopoverContent = withContext(chakra(ArkPopover.Content), 'content')
const PopoverDescription = withContext(chakra(ArkPopover.Description), 'description')
const PopoverIndicator = withContext(chakra(ArkPopover.Indicator), 'indicator')
const PopoverPositioner = withContext(chakra(ArkPopover.Positioner), 'positioner')
const PopoverTitle = withContext(chakra(ArkPopover.Title), 'title')
const PopoverTrigger = withContext(chakra(ArkPopover.Trigger), 'trigger')

const Root = Popover
const Anchor = PopoverAnchor
const Arrow = PopoverArrow
const ArrowTip = PopoverArrowTip
const CloseTrigger = PopoverCloseTrigger
const Content = PopoverContent
const Description = PopoverDescription
const Indicator = PopoverIndicator
const Positioner = PopoverPositioner
const Title = PopoverTitle
const Trigger = PopoverTrigger

export {
  Anchor,
  Arrow,
  ArrowTip,
  CloseTrigger,
  Content,
  Description,
  Indicator,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverIndicator,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
  Positioner,
  Root,
  Title,
  Trigger,
}

export interface PopoverProps extends HTMLChakraProps<typeof Popover> {}
export interface PopoverAnchorProps extends HTMLChakraProps<typeof PopoverAnchor> {}
export interface PopoverArrowProps extends HTMLChakraProps<typeof PopoverArrow> {}
export interface PopoverArrowTipProps extends HTMLChakraProps<typeof PopoverArrowTip> {}
export interface PopoverCloseTriggerProps extends HTMLChakraProps<typeof PopoverCloseTrigger> {}
export interface PopoverContentProps extends HTMLChakraProps<typeof PopoverContent> {}
export interface PopoverDescriptionProps extends HTMLChakraProps<typeof PopoverDescription> {}
export interface PopoverIndicatorProps extends HTMLChakraProps<typeof PopoverIndicator> {}
export interface PopoverPositionerProps extends HTMLChakraProps<typeof PopoverPositioner> {}
export interface PopoverTitleProps extends HTMLChakraProps<typeof PopoverTitle> {}
export interface PopoverTriggerProps extends HTMLChakraProps<typeof PopoverTrigger> {}
