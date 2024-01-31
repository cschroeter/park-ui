import { ToggleGroup } from '@ark-ui/react/toggle-group'
import { styled } from 'styled-system/jsx'
import { toggleGroup } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toggleGroup)

const Root = withProvider(styled(ToggleGroup.Root), 'root')
const Item = withContext(styled(ToggleGroup.Item), 'item')

export { Item, Root }
