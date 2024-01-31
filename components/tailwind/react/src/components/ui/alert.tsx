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

const Root = withProvider(ark.div, 'root')
const Content = withContext(ark.div, 'content')
const Description = withContext(ark.p, 'description')
const Icon = withContext(ark.svg, 'icon')
const Title = withContext(ark.h5, 'title')

export { Content, Description, Icon, Root, Title }
