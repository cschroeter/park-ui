import { Combobox, useComboboxItemContext } from '@ark-ui/solid/combobox'
import { ark } from '@ark-ui/solid/factory'
import { CheckIcon, ChevronsUpDownIcon, XIcon } from 'lucide-solid'
import { Show } from 'solid-js'
import { createStyleContext, type HTMLStyledProps } from 'styled-system/jsx'
import { type ComboboxVariantProps, combobox } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(combobox)

export type RootProps = HTMLStyledProps<'div'> & ComboboxVariantProps

export const Root = withProvider(Combobox.Root, 'root', {
  defaultProps: () => ({ positioning: { sameWidth: false } }),
}) as Combobox.RootComponent<RootProps>

export const RootProvider = withProvider(
  Combobox.RootProvider,
  'root',
) as Combobox.RootProviderComponent<RootProps>

export const ClearTrigger = withContext(Combobox.ClearTrigger, 'clearTrigger', {
  defaultProps: () => ({ children: <XIcon /> }),
})
export const Content = withContext(Combobox.Content, 'content')
export const Control = withContext(Combobox.Control, 'control')
export const Empty = withContext(Combobox.Empty, 'empty')
export const IndicatorGroup = withContext(ark.div, 'indicatorGroup')
export const Input = withContext(Combobox.Input, 'input')
export const Item = withContext(Combobox.Item, 'item')
export const ItemGroup = withContext(Combobox.ItemGroup, 'itemGroup')
export const ItemGroupLabel = withContext(Combobox.ItemGroupLabel, 'itemGroupLabel')
export const ItemText = withContext(Combobox.ItemText, 'itemText')
export const Label = withContext(Combobox.Label, 'label')
export const List = withContext(Combobox.List, 'list')
export const Positioner = withContext(Combobox.Positioner, 'positioner')
export const Trigger = withContext(Combobox.Trigger, 'trigger', {
  defaultProps: () => ({ children: <ChevronsUpDownIcon /> }),
})

export { ComboboxContext as Context } from '@ark-ui/solid/combobox'

const StyledItemIndicator = withContext(Combobox.ItemIndicator, 'itemIndicator')

export const ItemIndicator = (props: HTMLStyledProps<'div'>) => {
  const item = useComboboxItemContext()

  return (
    <Show when={item().selected} fallback={<svg aria-hidden="true" />}>
      <StyledItemIndicator {...props}>
        <CheckIcon />
      </StyledItemIndicator>
    </Show>
  )
}
