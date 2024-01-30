import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export const ToggleGroupRoot = withProvider(styled(ArkToggleGroup.Root), 'root')
export const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), 'item')

export const ToggleGroup = {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
}

export interface ToggleGroupRootProps extends ComponentProps<typeof ToggleGroupRoot> {}
export interface ToggleGroupItemProps extends ComponentProps<typeof ToggleGroupItem> {}
