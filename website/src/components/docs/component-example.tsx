import { cache } from 'react'
import { Box } from 'styled-system/jsx'
import { Button, Collapsible } from '@/components/ui'
import { getComponentSourceCode } from '~/app/docs/actions'
import { getComponentExample } from '~/lib/examples'
import { getServerContext } from '~/server-context'
import { ErrorBoundary } from '../error-boundary'
import { CodePreviewTabs } from './code-preview-tabs'

interface Props {
  component?: string
  name: string
  codeOnly?: boolean
}

const getCachedComponentSourceCode = cache(getComponentSourceCode)

export const ComponentExample = async (props: Props) => {
  const { name, codeOnly } = props
  const ctx = getServerContext()

  const component = props.component ?? ctx.component

  const Example = getComponentExample({ component, name })
  const sources = await getCachedComponentSourceCode({
    component,
    name,
  })

  if (codeOnly) {
    return <CodePreviewTabs sources={sources} defaultValue="react" borderRadius="l3" />
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="l3"
      overflow="hidden"
      className="not-prose"
      mt="6"
      mb="12"
      divideY="1px"
    >
      <Box p={{ base: '4', md: '8' }} color={component === 'text' ? 'fg.default' : undefined}>
        <ErrorBoundary componentName={name}>
          <Example />
        </ErrorBoundary>
      </Box>
      <Collapsible.Root
        position="relative"
        minH="10"
        bg={{ _light: 'gray.2', _dark: 'gray.1' }}
        lazyMount
      >
        <Collapsible.Trigger asChild>
          <Button size="xs" variant="plain" position="absolute" top="1" right="1" zIndex="1">
            Toggle code
          </Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <CodePreviewTabs
            defaultValue="react"
            sources={sources}
            borderRadius="0"
            borderWidth="0"
          />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  )
}
