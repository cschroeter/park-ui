import { Dialog as ArkDialog } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { dialog } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(dialog)

const Root = withProvider(ArkDialog.Root)
const Backdrop = withContext(styled(ArkDialog.Backdrop), 'backdrop')
const CloseTrigger = withContext(styled(ArkDialog.CloseTrigger), 'closeTrigger')
const Content = withContext(styled(ArkDialog.Content), 'content')
const Description = withContext(styled(ArkDialog.Description), 'description')
const Positioner = withContext(styled(ArkDialog.Positioner), 'positioner')
const Title = withContext(styled(ArkDialog.Title), 'title')
const Trigger = withContext(styled(ArkDialog.Trigger), 'trigger')

export { Backdrop, CloseTrigger, Content, Description, Positioner, Root, Title, Trigger }
