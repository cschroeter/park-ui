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

export const CardRoot = withProvider(ark.div, 'root')
export const CardBody = withContext(ark.div, 'body')
export const CardDescription = withContext(ark.p, 'description')
export const CardFooter = withContext(ark.div, 'footer')
export const CardHeader = withContext(ark.div, 'header')
export const CardTitle = withContext(ark.h3, 'title')

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Body: CardBody,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
})
