import { pascalCase } from 'change-case'
import dynamic from 'next/dynamic'
import { Box, Divider } from 'styled-system/jsx'
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
      .then((mod) => mod[name]),
  )

  const codeExamples = await getComponentExamples({
    component,
    name,
  })

  return (
    <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
      <Box p="6">
        <ErrorBoundary componentName={name}>
          <Example />
        </ErrorBoundary>
      </Box>
      <Divider />
      <CodePreviewTabs examples={codeExamples} />
    </Box>
  )
}
