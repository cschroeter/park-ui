import { ark } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'card',
  slots: {
    root: 'card__root',
    header: 'card__header',
    body: 'card__body',
    footer: 'card__footer',
    title: 'card__title',
    description: 'card__description',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(ark.div, 'root')
const Body = withContext(ark.div, 'body')
const Description = withContext(ark.p, 'description')
const Footer = withContext(ark.div, 'footer')
const Header = withContext(ark.div, 'header')
const Title = withContext(ark.h3, 'title')

export { Body, Description, Footer, Header, Root, Title }
