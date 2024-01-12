import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext('ToggleGroup')

const ToggleGroup = withProvider(chakra(ArkToggleGroup.Root), 'root')
const ToggleGroupItem = withContext(chakra(ArkToggleGroup.Item), 'item')

const Root = ToggleGroup
const Item = ToggleGroupItem

export { Item, Root, ToggleGroup, ToggleGroupItem }

export interface ToggleGroupProps extends HTMLChakraProps<typeof ToggleGroup> {}
export interface ToggleGroupItemProps extends HTMLChakraProps<typeof ToggleGroupItem> {}
