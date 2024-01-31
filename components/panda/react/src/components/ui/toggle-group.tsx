import { ToggleGroup as ArkToggleGroup } from '@ark-ui/react/toggle-group'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

const Root = withProvider(styled(ArkToggleGroup.Root), 'root')
const Item = withContext(styled(ArkToggleGroup.Item), 'item')

export { Item, Root }

export interface ToggleGroupRootProps extends ComponentProps<typeof Root> {}
export interface ToggleGroupItemProps extends ComponentProps<typeof Item> {}
