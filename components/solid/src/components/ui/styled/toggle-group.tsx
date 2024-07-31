import { type Assign, ToggleGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type ToggleGroupVariantProps, toggleGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ToggleGroup.RootProviderBaseProps>, ToggleGroupVariantProps>
>(ToggleGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, ToggleGroup.RootBaseProps>, ToggleGroupVariantProps>
>(ToggleGroup.Root, 'root')

export const Item = withContext<Assign<HTMLStyledProps<'button'>, ToggleGroup.ItemBaseProps>>(
  ToggleGroup.Item,
  'item',
)

export { ToggleGroupContext as Context } from '@ark-ui/solid'
