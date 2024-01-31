import { Toast } from '@ark-ui/solid'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'toast',
  slots: {
    group: 'toast__group',
    root: 'toast__root',
    title: 'toast__title',
    description: 'toast__description',
    closeTrigger: 'toast__closeTrigger',
  },
  variants: {},
})
const { withProvider, withContext } = createStyleContext(styles)

const Root = withProvider(Toast.Root, 'root')
const CloseTrigger = withContext(Toast.CloseTrigger, 'closeTrigger')
const Description = withContext(Toast.Description, 'description')
const Group = withContext(Toast.Group, 'group')
const Title = withContext(Toast.Title, 'title')

export { CloseTrigger, Description, Group, Root, Title }
