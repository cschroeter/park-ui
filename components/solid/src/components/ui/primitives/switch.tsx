import { type Assign, Switch } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type SwitchRecipeVariantProps, switchRecipe } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(switchRecipe)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'label'>, Switch.RootProviderProps>, SwitchRecipeVariantProps>
>(Switch.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'label'>, Switch.RootProps>, SwitchRecipeVariantProps>
>(Switch.Root, 'root')

export const Control = withContext<Assign<HTMLStyledProps<'span'>, Switch.ControlProps>>(
  Switch.Control,
  'control',
)

export const Label = withContext<Assign<HTMLStyledProps<'span'>, Switch.LabelProps>>(
  Switch.Label,
  'label',
)

export const Thumb = withContext<Assign<HTMLStyledProps<'span'>, Switch.ThumbProps>>(
  Switch.Thumb,
  'thumb',
)

export {
  SwitchContext as Context,
  SwitchHiddenInput as HiddenInput,
} from '@ark-ui/solid'
