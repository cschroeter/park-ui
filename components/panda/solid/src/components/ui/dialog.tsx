import { Dialog } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

const Root = withProvider(Dialog.Root)
const Backdrop = withContext(styled(Dialog.Backdrop), 'backdrop')
const CloseTrigger = withContext(styled(Dialog.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(Dialog.Content), 'content')
const Description = withContext(styled(Dialog.Description), 'description')
const Positioner = withContext(styled(Dialog.Positioner), 'positioner')
const Title = withContext(styled(Dialog.Title), 'title')
const Trigger = withContext(styled(Dialog.Trigger), 'trigger')

export { Backdrop, CloseTrigger, Content, Description, Positioner, Root, Title, Trigger }
