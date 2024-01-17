import { ark } from '@ark-ui/react/factory'
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

const Alert = withProvider(ark.div, 'root')
const AlertContent = withContext(ark.div, 'content')
const AlertDescription = withContext(ark.p, 'description')
const AlertIcon = withContext(ark.svg, 'icon')
const AlertTitle = withContext(ark.h5, 'title')

const Root = Alert
const Content = AlertContent
const Description = AlertDescription
const Icon = AlertIcon
const Title = AlertTitle

export {
  Alert,
  AlertContent,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Content,
  Description,
  Icon,
  Root,
  Title,
}
