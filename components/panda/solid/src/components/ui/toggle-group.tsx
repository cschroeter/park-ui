import { ToggleGroup as ArkToggleGroup } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export const ToggleGroupRoot = withProvider(styled(ArkToggleGroup.Root), 'root')
export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), 'item')

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
})

export type ToggleGroupProps = typeof ToggleGroupRoot
export type ToggleGroupItemProps = typeof ToggleGroupItem
