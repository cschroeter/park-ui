import { Accordion } from '@ark-ui/react/accordion'
import { styled } from 'styled-system/jsx'
import { accordion } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(accordion)

const Root = withProvider(styled(Accordion.Root), 'root')
const Item = withContext(styled(Accordion.Item), 'item')
const ItemContent = withContext(styled(Accordion.ItemContent), 'itemContent')
const ItemIndicator = withContext(styled(Accordion.ItemIndicator), 'itemIndicator')
const ItemTrigger = withContext(styled(Accordion.ItemTrigger), 'itemTrigger')

export { Item, ItemContent, ItemIndicator, ItemTrigger, Root }
