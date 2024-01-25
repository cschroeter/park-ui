import { ark } from '@ark-ui/react/factory'
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

const Card = withProvider(ark.div, 'root')
const CardBody = withContext(ark.div, 'body')
const CardDescription = withContext(ark.p, 'description')
const CardFooter = withContext(ark.div, 'footer')
const CardHeader = withContext(ark.div, 'header')
const CardTitle = withContext(ark.h3, 'title')

const Root = Card
const Body = CardBody
const Description = CardDescription
const Footer = CardFooter
const Header = CardHeader
const Title = CardTitle

export {
  Body,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Description,
  Footer,
  Header,
  Root,
  Title,
}
