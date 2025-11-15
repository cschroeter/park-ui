import { SegmentGroup } from '@ark-ui/solid/segment-group'
import { type ComponentProps, createMemo, For, type JSX, splitProps } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { segmentGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(segmentGroup)

export type RootProps = ComponentProps<typeof Root>

export const Root = withProvider(SegmentGroup.Root, 'root', {
  defaultProps: () => ({ orientation: 'horizontal' }) as const,
  forwardProps: ['orientation'],
})
export const RootProvider = withProvider(SegmentGroup.RootProvider, 'root')
export const Indicator = withContext(SegmentGroup.Indicator, 'indicator')
export const Item = withContext(SegmentGroup.Item, 'item')
export const ItemControl = withContext(SegmentGroup.ItemControl, 'itemControl')
export const ItemHiddenInput = SegmentGroup.ItemHiddenInput
export const ItemText = withContext(SegmentGroup.ItemText, 'itemText')
export const Label = withContext(SegmentGroup.Label, 'label')

export { SegmentGroupContext as Context } from '@ark-ui/solid/segment-group'

interface Item {
  value: string
  label: JSX.Element
  disabled?: boolean | undefined
}

type ItemProps = ComponentProps<typeof Item>

export interface ItemsProps extends Omit<ItemProps, 'value'> {
  items: Array<string | Item>
}

export const Items = (props: ItemsProps) => {
  const [local, itemProps] = splitProps(props, ['items'])
  const data = createMemo(() => normalize(local.items))

  return (
    <For each={data()}>
      {(item) => (
        <Item value={item.value} disabled={item.disabled} {...itemProps}>
          <ItemText>{item.label}</ItemText>
          <ItemHiddenInput />
        </Item>
      )}
    </For>
  )
}

const normalize = (items: Array<string | Item>): Item[] =>
  items.map((item) => (typeof item === 'string' ? { value: item, label: item } : item))
