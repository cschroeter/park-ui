import { camelCase, pascalCase } from 'change-case'
import dynamic from 'next/dynamic'
import { Box } from 'styled-system/jsx'
import { getComponentExamples } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
import { ErrorBoundary } from '../error-boundary'
import { CodePreviewTabs } from './code-preview-tabs'

interface Props {
  name: string
}

export const ComponentExample = async (props: Props) => {
  const { name } = props
  const { component } = getServerContext()

  const Example = dynamic(() =>
    import('@park-ui/react/examples')
      // @ts-expect-error
      .then((mod) => mod[pascalCase(component)])
      .then((mod) => mod[camelCase(name)]),
  )

  const codeExamples = await getComponentExamples({
    component,
    name,
  })

  return (
    <Box
      borderWidth="1px"
      borderRadius="l3"
      overflow="hidden"
      className="not-prose"
      my="6"
      divideY="1px"
    >
      <Box p={{ base: '4', md: '8' }}>
        <ErrorBoundary componentName={name}>
          <Example />
        </ErrorBoundary>
      </Box>
      <CodePreviewTabs collapsable sources={codeExamples} borderRadius="0" borderWidth="0" />
    </Box>
  )
}
