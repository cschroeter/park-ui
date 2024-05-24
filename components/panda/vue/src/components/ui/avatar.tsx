import { Avatar } from '@ark-ui/vue/avatar'
import { type AccordionVariantProps, avatar } from '../../../styled-system/recipes'
import type { Assign, JsxStyleProps } from '../../../styled-system/types'
import { createStyleContext } from '../../lib/create-style-context'

const { withProvider, withContext } = createStyleContext(avatar)

export interface RootProps extends Assign<JsxStyleProps, Avatar.RootProps>, AccordionVariantProps {}
export const Root = withProvider<RootProps>(Avatar.Root, 'root')

export const Fallback = withContext<Assign<JsxStyleProps, Avatar.FallbackProps>>(
  Avatar.Fallback,
  'fallback',
)
export const Image = withContext<Assign<JsxStyleProps, Avatar.ImageProps>>(Avatar.Image, 'image')

export {
  AvatarContext as Context,
  type AvatarContextProps as ContextProps,
  type AvatarRootEmits as RootEmits,
} from '@ark-ui/vue/avatar'
