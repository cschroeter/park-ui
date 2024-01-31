import { Toast } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

const Root = withProvider(styled(Toast.Root), 'root')
const CloseTrigger = withContext(styled(Toast.CloseTrigger), 'closeTrigger')
const Description = withContext(styled(Toast.Description), 'description')
const Group = withContext(styled(Toast.Group), 'group')
const Title = withContext(styled(Toast.Title), 'title')

export { CloseTrigger, Description, Group, Root, Title }
