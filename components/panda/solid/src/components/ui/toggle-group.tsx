import { ToggleGroup as ArkToggleGroup } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

const Root = withProvider(styled(ArkToggleGroup.Root), 'root')
const Item = withContext(styled(ArkToggleGroup.Item), 'item')

export { Item, Root }
