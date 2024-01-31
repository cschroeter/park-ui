import { Toast as ArkToast } from '@ark-ui/react/toast'
import { styled } from 'styled-system/jsx'
import { toast } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(toast)

const Root = withProvider(styled(ArkToast.Root), 'root')
const CloseTrigger = withContext(styled(ArkToast.CloseTrigger), 'closeTrigger')
const Description = withContext(styled(ArkToast.Description), 'description')
const Group = withContext(styled(ArkToast.Group), 'group')
const Title = withContext(styled(ArkToast.Title), 'title')

export { CloseTrigger, Description, Group, Root, Title }
