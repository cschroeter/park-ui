import { ark } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'alert',
  slots: {
    root: 'alert__root',
    content: 'alert__content',
    description: 'alert__description',
    icon: 'alert__icon',
    title: 'alert__title',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

export const AlertRoot = withProvider(ark.div, 'root')
export const AlertContent = withContext(ark.div, 'content')
export const AlertDescription = withContext(ark.p, 'description')
export const AlertIcon = withContext(ark.svg, 'icon')
export const AlertTitle = withContext(ark.h5, 'title')

export const Alert = Object.assign(AlertRoot, {
  Root: AlertRoot,
  Content: AlertContent,
  Description: AlertDescription,
  Icon: AlertIcon,
  Title: AlertTitle,
})
