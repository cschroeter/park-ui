import { ToggleGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export const Root = withProvider(styled(ToggleGroup.Root), 'root')
export const Item = withContext(styled(ToggleGroup.Item), 'item')

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
