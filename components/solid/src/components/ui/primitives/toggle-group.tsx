import { ToggleGroup, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ToggleGroupVariantProps, toggleGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ToggleGroup.RootProviderProps>, ToggleGroupVariantProps>
>(ToggleGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ToggleGroup.RootProps>, ToggleGroupVariantProps>
>(ToggleGroup.Root, 'root')

export const Item = withContext<Assign<HTMLStyledProps<'button'>, ToggleGroup.ItemProps>>(
  ToggleGroup.Item,
  'item',
)

export { ToggleGroupContext as Context } from '@ark-ui/solid'
