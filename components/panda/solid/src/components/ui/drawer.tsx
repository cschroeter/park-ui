import { ark, Dialog as ArkDrawer } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { drawer } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(drawer)

const Root = withProvider(ArkDrawer.Root)
const Backdrop = withContext(styled(ArkDrawer.Backdrop), 'backdrop')
const Body = withContext(styled(ark.div), 'body')
const CloseTrigger = withContext(styled(ArkDrawer.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(ArkDrawer.Content), 'content')
const Description = withContext(styled(ArkDrawer.Description), 'description')
const Footer = withContext(styled(ark.div), 'footer')
const Header = withContext(styled(ark.div), 'header')
const Positioner = withContext(styled(ArkDrawer.Positioner), 'positioner')
const Title = withContext(styled(ArkDrawer.Title), 'title')
const Trigger = withContext(styled(ArkDrawer.Trigger), 'trigger')

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
