import { Menu as ArkMenu } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { menu } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(menu)

const Root = withProvider(ArkMenu.Root)
const Arrow = withContext(styled(ArkMenu.Arrow), 'arrow')
const ArrowTip = withContext(styled(ArkMenu.ArrowTip), 'arrowTip')
const Content = withContext(styled(ArkMenu.Content), 'content')
const ContextTrigger = withContext(styled(ArkMenu.ContextTrigger), 'contextTrigger')
const Item = withContext(styled(ArkMenu.Item), 'item')
const ItemGroup = withContext(styled(ArkMenu.ItemGroup), 'itemGroup')
const ItemGroupLabel = withContext(styled(ArkMenu.ItemGroupLabel), 'itemGroupLabel')
const OptionItem = withContext(styled(ArkMenu.OptionItem), 'optionItem')
const Positioner = withContext(styled(ArkMenu.Positioner), 'positioner')
const Separator = withContext(styled(ArkMenu.Separator), 'separator')
const Trigger = withContext(styled(ArkMenu.Trigger), 'trigger')
const TriggerItem = withContext(styled(ArkMenu.TriggerItem), 'triggerItem')

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
