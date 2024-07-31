import { type Assign, RatingGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type RatingGroupVariantProps, ratingGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RatingGroup.RootProviderBaseProps>, RatingGroupVariantProps>
>(RatingGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RatingGroup.RootBaseProps>, RatingGroupVariantProps>
>(RatingGroup.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, RatingGroup.ControlBaseProps>>(
  RatingGroup.Control,
  'control',
)

export const Item = withContext<Assign<HTMLStyledProps<'span'>, RatingGroup.ItemBaseProps>>(
  RatingGroup.Item,
  'item',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, RatingGroup.LabelBaseProps>>(
  RatingGroup.Label,
  'label',
)

export {
  RatingGroupContext as Context,
  RatingGroupHiddenInput as HiddenInput,
  RatingGroupItemContext as ItemContext,
} from '@ark-ui/solid'
