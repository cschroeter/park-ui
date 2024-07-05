import { type Assign, RatingGroup } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type RatingGroupVariantProps, ratingGroup } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(ratingGroup)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RatingGroup.RootProviderProps>, RatingGroupVariantProps>
>(RatingGroup.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, RatingGroup.RootProps>, RatingGroupVariantProps>
>(RatingGroup.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'div'>, RatingGroup.ControlProps>>(
  RatingGroup.Control,
  'control',
)

export const Item = withContext<Assign<HTMLStyledProps<'span'>, RatingGroup.ItemProps>>(
  RatingGroup.Item,
  'item',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, RatingGroup.LabelProps>>(
  RatingGroup.Label,
  'label',
)

export {
  RatingGroupContext as Context,
  RatingGroupHiddenInput as HiddenInput,
  RatingGroupItemContext as ItemContext,
} from '@ark-ui/solid'
