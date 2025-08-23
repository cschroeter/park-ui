import { pascalCase } from 'change-case'
import dynamic from 'next/dynamic'
import { Box, Divider } from 'styled-system/jsx'
import { getComponentCodeExamples } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
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

  const examples = await getComponentCodeExamples({
    component: 'button',
    framework: 'react',
    example: 'basic',
  })

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p={{ base: '4', md: '6' }}>
        <Example />
      </Box>
      <Divider />
      <CodePreviewTabs examples={examples} />
    </Box>
  )
}
