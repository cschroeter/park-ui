import { Dialog as ArkDrawer } from '@ark-ui/react/dialog'
import { ark } from '@ark-ui/react/factory'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
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
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(ArkDrawer.Root)
const Backdrop = withContext(ArkDrawer.Backdrop, 'backdrop')
const Body = withContext(ark.div, 'body')
const CloseTrigger = withContext(ArkDrawer.CloseTrigger, 'closeTrigger')
const Content = withContext(ArkDrawer.Content, 'content')
const Description = withContext(ArkDrawer.Description, 'description')
const Footer = withContext(ark.div, 'footer')
const Header = withContext(ark.div, 'header')
const Positioner = withContext(ArkDrawer.Positioner, 'positioner')
const Title = withContext(ArkDrawer.Title, 'title')
const Trigger = withContext(ArkDrawer.Trigger, 'trigger')

export {
  Backdrop,
  Body,
  CloseTrigger,
  Content,
  Description,
  Footer,
  Header,
  Positioner,
  Root,
  Title,
  Trigger,
}
