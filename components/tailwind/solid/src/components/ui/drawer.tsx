import { ark, Dialog as ArkDrawer } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
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
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(ArkDrawer.Root)
export const Backdrop = withContext(ArkDrawer.Backdrop, 'backdrop')
export const Body = withContext(ark.div, 'body')
export const CloseTrigger = withContext(ArkDrawer.CloseTrigger, 'closeTrigger')
export const Content = withContext(ArkDrawer.Content, 'content')
export const Description = withContext(ArkDrawer.Description, 'description')
export const Footer = withContext(ark.div, 'footer')
export const Header = withContext(ark.div, 'header')
export const Positioner = withContext(ArkDrawer.Positioner, 'positioner')
export const Title = withContext(ArkDrawer.Title, 'title')
export const Trigger = withContext(ArkDrawer.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface BackdropProps extends ComponentProps<typeof Backdrop> {}
export interface BodyProps extends ComponentProps<typeof Body> {}
export interface CloseTriggerProps extends ComponentProps<typeof CloseTrigger> {}
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface DescriptionProps extends ComponentProps<typeof Description> {}
export interface FooterProps extends ComponentProps<typeof Footer> {}
export interface HeaderProps extends ComponentProps<typeof Header> {}
export interface PositionerProps extends ComponentProps<typeof Positioner> {}
export interface TitleProps extends ComponentProps<typeof Title> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
