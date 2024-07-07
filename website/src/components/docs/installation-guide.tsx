import { join } from 'node:path'
import { Array, Console, Effect, pipe } from 'effect'
import { readJson } from 'fs-extra'
import { Code, Step, Steps, Text } from '~/components/ui'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'
import { toPascalCase } from '~/lib/string-utils'
import { CodePreviewTabs } from '../code-preview-tabs'
import { Recipe } from './recipe'

export const InstallationGuide = async () => {
  const { framework, component } = getServerContext()

  const programm = pipe(
    Effect.forEach(['react', 'solid', 'vue'], (framework) =>
      pipe(
        Effect.succeed(
          join(process.cwd(), `./public/registry/latest/${framework}/components/${component}.json`),
        ),
        Effect.flatMap((path) =>
          Effect.tryPromise({
            try: () => readJson(path, 'utf8'),
            catch: () => new Error('Snippet not found'),
          }),
        ),
        Effect.catchAll(() => Effect.succeed({ primitive: 'Not yet available' })),
        Effect.flatMap((variants) =>
          pipe(
            Effect.forEach(Object.entries(variants), ([name, code]) =>
              pipe(
                Effect.promise(() => highlight(code)),
                Effect.map((html) => ({
                  label: framework,
                  value: framework,
                  _type: name,
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
    Effect.map((examples) => Array.groupBy(examples, (example) => example._type)),
  )
  const examples = await Effect.runPromise(programm)

  const hasComposition = Object.keys(examples).includes('composition')

  return (
    <Steps>
      <Step number="1" title="Styled Primitive">
        <Text>
          To use the {toPascalCase(component)} component, add it to your
          <Code>~/components/ui/primitives</Code> directory:
        </Text>
        <CodePreviewTabs defaultValue={framework} examples={examples.primitive} />
      </Step>
      {hasComposition && (
        <Step number="2" title="Add Composition">
          <Text>
            For easier usage of {toPascalCase(component)}, copy this composition file to
            <Code>~/components/ui</Code> directory:
          </Text>
          <CodePreviewTabs defaultValue={framework} examples={examples.composition} />
        </Step>
      )}
      <Step number={hasComposition ? '3' : '2'} title="Integrate Recipe">
        <Text>
          If you're not using <Code>@park-ui/preset</Code>, add the following recipe to your
          <Code>panda.config.ts</Code>:
        </Text>
        <Recipe />
      </Step>
    </Steps>
  )
}
