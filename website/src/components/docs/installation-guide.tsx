import { join } from 'node:path'
import { Array, Effect, pipe } from 'effect'
import { readJson } from 'fs-extra'
import { Code, Step, Steps, Text } from '~/components/ui'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'
import { toPascalCase } from '~/lib/string-utils'
import { CodePreviewTabs } from '../code-preview-tabs'
import { Recipe } from './recipe'

interface Component {
  id: string
  name: string
  filename: string
  variants: {
    primitive: string
    composition?: string
  }
}

export const InstallationGuide = async () => {
  const { framework, component } = getServerContext()

  const programm = pipe(
    Effect.forEach(['react', 'solid', 'vue'], (framework) =>
      pipe(
        Effect.tryPromise({
          try: () =>
            readJson(
              join(
                process.cwd(),
                `./public/registry/latest/${framework}/components/${component}.json`,
              ),
              'utf8',
            ) as Promise<Component>,
          catch: () => new Error('Snippet not found'),
        }),
        Effect.catchAll(() => Effect.succeed({ variants: { primitive: 'Not yet available' } })),
        Effect.flatMap((component) =>
          pipe(
            Effect.forEach(Object.entries(component.variants), ([name, code]) =>
              pipe(
                Effect.promise(() => highlight(code)),
                Effect.map((html) => ({
                  label: framework,
                  value: framework,
                  _variant: name,
                  code,
                  html,
                })),
              ),
            ),
          ),
        ),
      ),
    ),
    Effect.map(Array.flatten),
    Effect.map((examples) => Array.groupBy(examples, (example) => example._variant)),
  )
  const { primitive, composition } = await Effect.runPromise(programm)
  return (
    <Steps>
      <Step number="1" title="Styled Primitive">
        <Text>
          To use the {toPascalCase(component)} component, add it to your
          <Code>~/components/ui/primitives</Code> directory:
        </Text>
        <CodePreviewTabs defaultValue={framework} examples={primitive} />
      </Step>
      {composition && (
        <Step number="2" title="Add Composition">
          <Text>
            For easier usage of {toPascalCase(component)}, copy this composition file to
            <Code>~/components/ui</Code> directory:
          </Text>
          <CodePreviewTabs defaultValue={framework} examples={composition} />
        </Step>
      )}
      <Step number={composition ? '3' : '2'} title="Integrate Recipe">
        <Text>
          If you're not using <Code>@park-ui/preset</Code>, add the following recipe to your
          <Code>panda.config.ts</Code>:
        </Text>
        <Recipe />
      </Step>
    </Steps>
  )
}
