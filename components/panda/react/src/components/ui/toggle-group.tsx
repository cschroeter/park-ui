import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

const ToggleGroup = withProvider(styled(ArkToggleGroup.Root), 'root')
const ToggleGroupItem = withContext(styled(ArkToggleGroup.Item), 'item')

const Root = ToggleGroup
const Item = ToggleGroupItem

export { Item, Root, ToggleGroup, ToggleGroupItem }

export interface ToggleGroupProps extends ComponentProps<typeof ToggleGroup> {}
export interface ToggleGroupItemProps extends ComponentProps<typeof ToggleGroupItem> {}
