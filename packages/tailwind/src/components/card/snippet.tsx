import { ark } from '@ark-ui/react'
import { createStyleContext } from '~/lib/create-style-context'
import { cardStyles } from './recipe'

const { withProvider, withContext } = createStyleContext(cardStyles)

const CardRoot = withProvider(ark.div, 'root')
export const CardContent = withContext(ark.div, 'content')
export const CardDescription = withContext(ark.p, 'description')
export const CardFooter = withContext(ark.div, 'footer')
export const CardHeader = withContext(ark.div, 'header')
export const CardTitle = withContext(ark.h3, 'title')

export const Card = Object.assign(CardRoot, {
  Root: CardRoot,
  Content: CardContent,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
})
