import { ark } from '@ark-ui/solid'
import { styled } from 'styled-system/jsx'
import { alert } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(alert)

const Root = withProvider(styled(ark.div), 'root')
const Content = withContext(styled(ark.div), 'content')
const Description = withContext(styled(ark.p), 'description')
const Icon = withContext(styled(ark.svg), 'icon')
const Title = withContext(styled(ark.h5), 'title')

export { Content, Description, Icon, Root, Title }
