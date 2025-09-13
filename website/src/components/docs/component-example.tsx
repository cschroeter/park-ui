import { camelCase, pascalCase } from 'change-case'
import dynamic from 'next/dynamic'
import { cache } from 'react'
import { Box } from 'styled-system/jsx'
import { Button, Collapsible } from '@/components/ui'
import { getComponentExamples } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
import { ErrorBoundary } from '../error-boundary'
import { CodePreviewTabs } from './code-preview-tabs'

interface Props {
  name: string
  codeOnly?: boolean
}

const createDynamicExample = cache((component: string, name: string) => {
  return dynamic(() =>
    import('@park-ui/react/examples')
      // @ts-expect-error
      .then((mod) => mod[pascalCase(component)])
      .then((mod) => mod[camelCase(name)]),
  )
})

const getCachedComponentExamples = cache(getComponentExamples)

export const ComponentExample = async (props: Props) => {
  const { name, codeOnly } = props
  const { component } = getServerContext()

  const Example = createDynamicExample(component, name)

  const codeExamples = await getCachedComponentExamples({
    component,
    name,
  })

  if (codeOnly) {
    return <CodePreviewTabs sources={codeExamples} defaultValue="react" />
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
        colorPalette="gray"
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
            sources={codeExamples}
            borderRadius="0"
            borderWidth="0"
          />
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  )
}
