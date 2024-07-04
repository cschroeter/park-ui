import { type Assign, Dialog as Drawer, type HTMLArkProps, ark } from '@ark-ui/solid'
import { type DrawerVariantProps, drawer } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(drawer)

export interface RootProps extends Drawer.RootProps, DrawerVariantProps {}
export const Root = withRootProvider<RootProps>(Drawer.Root)

export const Backdrop = withContext<Assign<JsxStyleProps, Drawer.BackdropProps>>(
  Drawer.Backdrop,
  'backdrop',
)

export const Body = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(ark.div, 'body')

export const CloseTrigger = withContext<Assign<JsxStyleProps, Drawer.CloseTriggerProps>>(
  Drawer.CloseTrigger,
  'closeTrigger',
)

export const Content = withContext<Assign<JsxStyleProps, Drawer.ContentProps>>(
  Drawer.Content,
  'content',
)

export const Description = withContext<Assign<JsxStyleProps, Drawer.DescriptionProps>>(
  Drawer.Description,
  'description',
)

export const Footer = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(ark.div, 'footer')

export const Header = withContext<Assign<JsxStyleProps, HTMLArkProps<'div'>>>(ark.div, 'header')

export const Positioner = withContext<Assign<JsxStyleProps, Drawer.PositionerProps>>(
  Drawer.Positioner,
  'positioner',
)

export const Title = withContext<Assign<JsxStyleProps, Drawer.TitleProps>>(Drawer.Title, 'title')

export const Trigger = withContext<Assign<JsxStyleProps, Drawer.TriggerProps>>(
  Drawer.Trigger,
  'trigger',
)

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/solid'
