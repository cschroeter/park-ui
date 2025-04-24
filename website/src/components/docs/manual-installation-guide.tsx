import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Array, Effect, pipe } from 'effect'
import { Code } from '~/components/ui/code'
import { Step, Steps } from '~/components/ui/stepper'
import { Text } from '~/components/ui/text'
import { getFramework } from '~/lib/framework'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'
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
  const { component } = getServerContext()
  const framework = await getFramework()

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
            variants: [{ file: 'styled', content: 'No snippet found' }],
          }),
        ),
        Effect.flatMap((component) =>
          pipe(
            Effect.forEach(component.variants, (variant) =>
              pipe(
                Effect.promise(() =>
                  highlight(variant.content, framework === 'vue' ? 'vue' : 'tsx'),
                ),
                Effect.map((html) => ({
                  file: variant.file,
                  label: framework,
                  value: framework,
                  code: variant.content,
                  html,
                  _tag: variant.file.startsWith('styled') ? 'styled' : 'composition',
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
  const { styled, composition } = await Effect.runPromise(programm)

  const isReexported = composition[0].code.startsWith('export')

  return (
    <Steps>
      <Step number="1" title="Add Styled Primitive">
        <Text>
          Copy the code snippet below into <Code>~/components/ui/{styled[0].file}</Code>
        </Text>
        <CodePreviewTabs defaultValue={framework} examples={styled} />
      </Step>
      {isReexported ? (
        <Step number="2" title="Add Re-Export">
          <Text>
            To improve the developer experience, re-export the styled primitives in
            <Code>~/components/ui/{composition[0].file}</Code>.
          </Text>
          <CodePreviewTabs defaultValue={framework} examples={composition} />
        </Step>
      ) : (
        <Step number="2" title="Add Composition">
          <Text>
            Copy the composition snippet below into{' '}
            <Code>~/components/ui/{composition[0].file}</Code>
          </Text>
          <CodePreviewTabs defaultValue={framework} examples={composition} />
        </Step>
      )}
      <Step number="3" title="Integrate Recipe">
        <Text>
          If you're not using <Code>@park-ui/preset</Code>, add the following recipe to your
          <Code>panda.config.ts</Code>:
        </Text>
        <Recipe />
      </Step>
    </Steps>
  )
}
