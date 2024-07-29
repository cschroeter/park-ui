import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Array, Effect, pipe } from 'effect'
import { Box } from 'styled-system/jsx'
import { Code } from '~/components/ui/code'
import { Step, Steps } from '~/components/ui/stepper'
import { Text } from '~/components/ui/text'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'
import { CodePreview } from '../code-preview'
import { CodePreviewTabs } from '../code-preview-tabs'
import { Recipe } from './recipe'

interface Variant {
  file: string
  content: string
}

interface Component {
  id: string
  name: string
  variants: Variant[]
}

export const ManualIntallationGuide = async () => {
  const { framework, component } = getServerContext()

  const programm = pipe(
    Effect.forEach(['react', 'solid', 'vue'], (framework) =>
      pipe(
        Effect.tryPromise({
          try: () =>
            readFile(
              join(
                process.cwd(),
                `./public/registry/latest/${framework}/components/${component}.json`,
              ),
              'utf8',
            ),
          catch: () => new Error('Snippet not found'),
        }),
        Effect.map((content) => JSON.parse(content) as Component),
        Effect.catchAll(() =>
          Effect.succeed({
            variants: [{ file: 'primitives', content: 'No snippet found', exports: '' }],
          }),
        ),
        Effect.flatMap((component) =>
          pipe(
            Effect.forEach(component.variants, (variant) =>
              pipe(
                Effect.promise(() => highlight(variant.content)),
                Effect.map((html) => ({
                  file: variant.file,
                  label: framework,
                  value: framework,
                  code: variant.content,
                  html,
                  _tag: variant.file.startsWith('primitives') ? 'primitive' : 'composition',
                })),
              ),
            ),
          ),
        ),
      ),
    ),
    Effect.map(Array.flatten),
    Effect.map((examples) => Array.groupBy(examples, (example) => example._tag)),
  )
  const { primitive, composition } = await Effect.runPromise(programm)

  return (
    <Steps>
      <Step number="1" title="Styled Primitive">
        <Text>
          Copy the code snippet below into <Code>~/components/ui/{primitive[0].file}</Code>
        </Text>
        <CodePreviewTabs defaultValue={framework} examples={primitive} />
      </Step>
      {composition && (
        <Step number="2" title="Add Composition">
          <Text>
            Copy the code snippet below into <Code>~/components/ui/{composition[0].file}</Code>
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
