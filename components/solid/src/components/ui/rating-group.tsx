import {
  RatingGroup,
  useRatingGroupContext,
  useRatingGroupItemContext,
} from '@ark-ui/solid/rating-group'
import { StarIcon } from 'lucide-solid'
import { type ComponentProps, For, type JSX, mergeProps, splitProps } from 'solid-js'
import { createStyleContext, type HTMLStyledProps } from 'styled-system/jsx'
import { ratingGroup } from 'styled-system/recipes'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider(RatingGroup.Root, 'root')
export const RootProvider = withProvider(RatingGroup.RootProvider, 'root')
export const Item = withContext(RatingGroup.Item, 'item')
export const Label = withContext(RatingGroup.Label, 'label')

export const HiddenInput = RatingGroup.HiddenInput

export {
  RatingGroupContext as Context,
  RatingGroupItemContext as ItemContext,
} from '@ark-ui/solid/rating-group'

interface ItemIndicatorProps extends HTMLStyledProps<'span'> {
  icon?: JSX.Element | undefined
}

const StyledItemIndicator = withContext('span', 'itemIndicator')

const cloneIcon = (icon: JSX.Element, type: string) => {
  if (!icon) return null
  const props = { [`data-${type}`]: '', 'aria-hidden': true, fill: 'currentColor' }
  if (typeof icon === 'object' && 'props' in icon) {
    return { ...icon, props: mergeProps(icon.props || {}, props) }
  }
  return icon
}

export const ItemIndicator = (props: ItemIndicatorProps) => {
  const [local, rest] = splitProps(props, ['icon'])
  const icon = () => local.icon ?? <StarIcon />
  const item = useRatingGroupItemContext()

  return (
    <StyledItemIndicator
      {...rest}
      data-highlighted={item().highlighted ? '' : undefined}
      data-checked={item().checked ? '' : undefined}
      data-half={item().half ? '' : undefined}
    >
      {cloneIcon(icon(), 'bg')}
      {cloneIcon(icon(), 'fg')}
    </StyledItemIndicator>
  )
}

interface ItemsProps extends Omit<ComponentProps<typeof Item>, 'index'> {
  icon?: JSX.Element | undefined
}

export const Items = (props: ItemsProps) => {
  const [local, rest] = splitProps(props, ['icon'])
  const ratingGroup = useRatingGroupContext()

  return (
    <For each={ratingGroup().items}>
      {(item) => (
        <Item index={item} {...rest}>
          <ItemIndicator icon={local.icon} />
        </Item>
      )}
    </For>
  )
}

export const Control = withContext(RatingGroup.Control, 'control', {
  defaultProps: () => ({ children: <Items /> }),
})
