import { kebabCase, pascalCase } from 'change-case'
import dynamic from 'next/dynamic'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getServerContext } from '~/server-context'

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

  const storyPath = join(
    process.cwd(),
    `../components/react/src/examples/${kebabCase(component)}/${kebabCase(name)}.tsx`,
  )

  const sourceCode = await readFile(storyPath, 'utf-8').catch(() => null)

  if (!sourceCode) {
    return <div>Example not found</div>
  }

  return (
    <div>
      <Example />
      <pre>
        <code>{sourceCode}</code>
      </pre>
    </div>
  )
}
