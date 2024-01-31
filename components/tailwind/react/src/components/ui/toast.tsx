import { Toast as ArkToast } from '@ark-ui/react/toast'
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

const Root = withProvider(ArkToast.Root, 'root')
const CloseTrigger = withContext(ArkToast.CloseTrigger, 'closeTrigger')
const Description = withContext(ArkToast.Description, 'description')
const Group = withContext(ArkToast.Group, 'group')
const Title = withContext(ArkToast.Title, 'title')

export { CloseTrigger, Description, Group, Root, Title }
