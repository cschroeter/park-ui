import { Dialog as Drawer } from '@ark-ui/react/dialog'
import { type HTMLArkProps, ark } from '@ark-ui/react/factory'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const drawer = tv(
  {
    base: 'drawer',
    defaultVariants: { variant: 'right' },
    slots: {
      trigger: 'drawer__trigger',
      backdrop: 'drawer__backdrop',
      positioner: 'drawer__positioner',
      content: 'drawer__content',
      title: 'drawer__title',
      description: 'drawer__description',
      closeTrigger: 'drawer__closeTrigger',
      header: 'drawer__header',
      body: 'drawer__body',
      footer: 'drawer__footer',
    },
    variants: {
      variant: {
        left: {
          trigger: 'drawer__trigger--variant_left',
          backdrop: 'drawer__backdrop--variant_left',
          positioner: 'drawer__positioner--variant_left',
          content: 'drawer__content--variant_left',
          title: 'drawer__title--variant_left',
          description: 'drawer__description--variant_left',
          closeTrigger: 'drawer__closeTrigger--variant_left',
          header: 'drawer__header--variant_left',
          body: 'drawer__body--variant_left',
          footer: 'drawer__footer--variant_left',
        },
        right: {
          trigger: 'drawer__trigger--variant_right',
          backdrop: 'drawer__backdrop--variant_right',
          positioner: 'drawer__positioner--variant_right',
          content: 'drawer__content--variant_right',
          title: 'drawer__title--variant_right',
          description: 'drawer__description--variant_right',
          closeTrigger: 'drawer__closeTrigger--variant_right',
          header: 'drawer__header--variant_right',
          body: 'drawer__body--variant_right',
          footer: 'drawer__footer--variant_right',
        },
      },
    },
  },
  { twMerge: false },
)
const { withRootProvider, withContext } = createStyleContext(drawer)

export interface RootProps extends Drawer.RootProps, VariantProps<typeof drawer> {}
export const Root = withRootProvider<RootProps>(Drawer.Root)

export const Backdrop = withContext<HTMLDivElement, Drawer.BackdropProps>(
  Drawer.Backdrop,
  'backdrop',
)

export const Body = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'body')

export const CloseTrigger = withContext<HTMLButtonElement, Drawer.CloseTriggerProps>(
  Drawer.CloseTrigger,
  'closeTrigger',
)

export const Content = withContext<HTMLDivElement, Drawer.ContentProps>(Drawer.Content, 'content')

export const Description = withContext<HTMLParagraphElement, Drawer.DescriptionProps>(
  Drawer.Description,
  'description',
)

export const Footer = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'footer')

export const Header = withContext<HTMLDivElement, HTMLArkProps<'div'>>(ark.div, 'header')

export const Positioner = withContext<HTMLDivElement, Drawer.PositionerProps>(
  Drawer.Positioner,
  'positioner',
)

export const Title = withContext<HTMLHeadingElement, Drawer.TitleProps>(Drawer.Title, 'title')

export const Trigger = withContext<HTMLButtonElement, Drawer.TriggerProps>(
  Drawer.Trigger,
  'trigger',
)

export {
  DialogContext as Context,
  type DialogContextProps as ContextProps,
} from '@ark-ui/react/dialog'
