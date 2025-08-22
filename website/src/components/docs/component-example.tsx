import { pascalCase } from 'change-case'
import dynamic from 'next/dynamic'
import { Box } from 'styled-system/jsx'
import { getComponentExampleSourceCode } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
import { CodeSnippet } from './code-snippet'

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

  const source = await getComponentExampleSourceCode({
    component: 'button',
    framework: 'react',
    example: 'basic',
  })

  return (
    <Box>
      <Example />
      <CodeSnippet source={source} />
    </Box>
  )
}
