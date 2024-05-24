import { type Assign, ToggleGroup } from '@ark-ui/solid'
import { type ToggleGroupVariantProps, toggleGroup } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

export interface RootProps
  extends Assign<JsxStyleProps, ToggleGroup.RootProps>,
    ToggleGroupVariantProps {}
export const Root = withProvider<RootProps>(ToggleGroup.Root, 'root')

export const Item = withContext<Assign<JsxStyleProps, ToggleGroup.ItemProps>>(
  ToggleGroup.Item,
  'item',
)

export {
  ToggleGroupContext as Context,
  type ToggleGroupContextProps as ContextProps,
} from '@ark-ui/solid'
