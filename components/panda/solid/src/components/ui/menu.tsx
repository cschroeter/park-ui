import { Menu } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

const Root = withProvider(Menu.Root)
const Arrow = withContext(styled(Menu.Arrow), 'arrow')
const ArrowTip = withContext(styled(Menu.ArrowTip), 'arrowTip')
const Content = withContext(styled(Menu.Content), 'content')
const ContextTrigger = withContext(styled(Menu.ContextTrigger), 'contextTrigger')
const Item = withContext(styled(Menu.Item), 'item')
const ItemGroup = withContext(styled(Menu.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(Menu.ItemGroupLabel), 'itemGroupLabel')
const OptionItem = withContext(styled(Menu.OptionItem), 'optionItem')
const Positioner = withContext(styled(Menu.Positioner), 'positioner')
const Separator = withContext(styled(Menu.Separator), 'separator')
const Trigger = withContext(styled(Menu.Trigger), 'trigger')
const TriggerItem = withContext(styled(Menu.TriggerItem), 'triggerItem')

export {
  Arrow,
  ArrowTip,
  Content,
  ContextTrigger,
  Item,
  ItemGroup,
  ItemGroupLabel,
  OptionItem,
  Positioner,
  Root,
  Separator,
  Trigger,
  TriggerItem,
}
