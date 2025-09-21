'use client'
import {
  RatingGroup,
  useRatingGroupContext,
  useRatingGroupItemContext,
} from '@ark-ui/react/rating-group'
import { StarIcon } from 'lucide-react'
import {
  type ComponentProps,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
} from 'react'
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
} from '@ark-ui/react/rating-group'

interface ItemIndicatorProps extends HTMLStyledProps<'span'> {
  icon?: ReactElement | undefined
}

const StyledItemIndicator = withContext('span', 'itemIndicator')

const cloneIcon = (icon: ReactElement, type: string) => {
  if (!isValidElement(icon)) return null
  const props = { [`data-${type}`]: '', 'aria-hidden': true, fill: 'currentColor' }
  return cloneElement(icon, props)
}

export const ItemIndicator = forwardRef<HTMLSpanElement, ItemIndicatorProps>(
  function ItemIndicator(props, ref) {
    const { icon = <StarIcon />, ...rest } = props
    const item = useRatingGroupItemContext()

    return (
      <StyledItemIndicator
        ref={ref}
        {...rest}
        data-highlighted={item.highlighted ? '' : undefined}
        data-checked={item.checked ? '' : undefined}
        data-half={item.half ? '' : undefined}
      >
        {cloneIcon(icon, 'bg')}
        {cloneIcon(icon, 'fg')}
      </StyledItemIndicator>
    )
  },
)

interface ItemsProps extends Omit<ComponentProps<typeof Item>, 'index'> {
  icon?: ReactElement | undefined
}

export const Items = (props: ItemsProps) => {
  const { icon, ...rest } = props
  const ratingGroup = useRatingGroupContext()
  return ratingGroup.items.map((item) => (
    <Item key={item} index={item} {...rest}>
      <ItemIndicator icon={icon} />
    </Item>
  ))
}

export const Control = withContext(RatingGroup.Control, 'control', {
  defaultProps: { children: <Items /> },
})
