import { styled } from 'styled-system/jsx'
import { card } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(card)

export const Card = withProvider(styled('div'), 'root')
export const CardTitle = withContext(styled('h3'), 'title')
export const CardDescription = withContext(styled('p'), 'description')
export const CardHeader = withContext(styled('div'), 'header')
export const CardContent = withContext(styled('div'), 'content')
export const CardFooter = withContext(styled('div'), 'footer')
