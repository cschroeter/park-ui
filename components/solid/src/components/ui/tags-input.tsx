import { TagsInput, useTagsInputContext } from '@ark-ui/solid/tags-input'
import { XIcon } from 'lucide-solid'
import { type ComponentProps, For } from 'solid-js'
import { createStyleContext } from 'styled-system/jsx'
import { tagsInput } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(tagsInput)

export type RootProps = ComponentProps<typeof Root>
export type ItemProps = ComponentProps<typeof Item>
export const Root = withProvider(TagsInput.Root, 'root')
export const RootProvider = withProvider(TagsInput.RootProvider, 'root')
export const ClearTrigger = withContext(TagsInput.ClearTrigger, 'clearTrigger', {
  defaultProps: () => ({ children: <XIcon /> }),
})
export const Control = withContext(TagsInput.Control, 'control')
export const HiddenInput = TagsInput.HiddenInput
export const Input = withContext(TagsInput.Input, 'input')
export const Item = withContext(TagsInput.Item, 'item')
export const ItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, 'itemDeleteTrigger', {
  defaultProps: () => ({ children: <XIcon /> }),
})
export const ItemInput = withContext(TagsInput.ItemInput, 'itemInput')
export const ItemPreview = withContext(TagsInput.ItemPreview, 'itemPreview')
export const ItemText = withContext(TagsInput.ItemText, 'itemText')
export const Label = withContext(TagsInput.Label, 'label')

export { TagsInputContext as Context } from '@ark-ui/solid/tags-input'

export interface TagsInputItemsProps extends Omit<ItemProps, 'value' | 'index'> {}

export const Items = (props: TagsInputItemsProps) => {
  const context = useTagsInputContext()

  return (
    <For each={context().value}>
      {(item, index) => (
        <Item index={index()} value={item} {...props}>
          <ItemPreview>
            <ItemText>{item}</ItemText>
            <ItemDeleteTrigger />
          </ItemPreview>
          <ItemInput />
        </Item>
      )}
    </For>
  )
}
