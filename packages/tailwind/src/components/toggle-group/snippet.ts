import * as Ark from '@ark-ui/react/toggle-group'
import { createStyleContext } from '~/lib/create-style-context'
import { toggleGroupStyles } from './recipe'

const { withProvider, withContext } = createStyleContext(toggleGroupStyles)

export * from '@ark-ui/react/toggle-group'

const ToggleGroupRoot = withProvider(Ark.ToggleGroup.Root, 'root')
export const ToggleGroupItem = withContext(Ark.ToggleGroup.Item, 'item')

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Root: ToggleGroupRoot,
  Item: ToggleGroupItem,
})
