import type { Assign, Dialog, HTMLArkProps } from '@ark-ui/react'
import { Dialog as Drawer } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import { type DialogVariantProps, drawer } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withRootProvider, withContext } = createStyleContext(drawer)

export interface RootProps extends Assign<JsxStyleProps, Dialog.RootProps>, DialogVariantProps {}
export const Root = withRootProvider<RootProps>(Drawer.Root)

export interface BackdropProps extends Assign<JsxStyleProps, Drawer.BackdropProps> {}
export const Backdrop = withContext<HTMLDivElement, BackdropProps>(Drawer.Backdrop, 'backdrop')

export interface BodyProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Body = withContext<HTMLDivElement, BodyProps>(ark.div, 'body')

export interface CloseTriggerProps extends Assign<JsxStyleProps, Drawer.CloseTriggerProps> {}
export const CloseTrigger = withContext<HTMLButtonElement, CloseTriggerProps>(
  Drawer.CloseTrigger,
  'closeTrigger',
)

export interface ContentProps extends Assign<JsxStyleProps, Drawer.ContentProps> {}
export const Content = withContext<HTMLDivElement, ContentProps>(Drawer.Content, 'content')

export interface DescriptionProps extends Assign<JsxStyleProps, Drawer.DescriptionProps> {}
export const Description = withContext<HTMLParagraphElement, DescriptionProps>(
  Drawer.Description,
  'description',
)

export interface FooterProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Footer = withContext<HTMLDivElement, FooterProps>(ark.div, 'footer')

export interface HeaderProps extends Assign<JsxStyleProps, HTMLArkProps<'div'>> {}
export const Header = withContext<HTMLDivElement, HeaderProps>(ark.div, 'header')

export interface PositionerProps extends Assign<JsxStyleProps, Drawer.PositionerProps> {}
export const Positioner = withContext<HTMLDivElement, PositionerProps>(
  Drawer.Positioner,
  'positioner',
)

export interface TitleProps extends Assign<JsxStyleProps, Drawer.TitleProps> {}
export const Title = withContext<HTMLHeadingElement, TitleProps>(Drawer.Title, 'title')

export interface TriggerProps extends Assign<JsxStyleProps, Drawer.TriggerProps> {}
export const Trigger = withContext<HTMLButtonElement, TriggerProps>(Drawer.Trigger, 'trigger')

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/react/dialog'
