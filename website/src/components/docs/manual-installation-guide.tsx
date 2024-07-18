import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Array, Effect, pipe } from 'effect'
import { Box } from 'styled-system/jsx'
import { Code, Step, Steps, Text } from '~/components/ui'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'
import { CodePreview } from '../code-preview'
import { CodePreviewTabs } from '../code-preview-tabs'
import { Recipe } from './recipe'

interface Variant {
  file: string
  content: string
  exports: string
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
                  exports: variant.exports,
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

  const primitiveExport = await highlight(primitive[0].exports)
  const compositionExport = composition
    ? await highlight(`export * from './primitives'\n${composition[0].exports}`)
    : ''

  return (
    <Steps>
      <Step number="1" title="Styled Primitive">
        <Text>
          Copy the code snippet below into <Code>~/components/ui/{primitive[0].file}</Code>
        </Text>
        <CodePreviewTabs defaultValue={framework} examples={primitive} />
        <Text>
          Extend <Code>~/components/ui/primitives/index.ts</Code> with the following line:
        </Text>
        <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
          <CodePreview html={primitiveExport} code={primitive[0].exports} />
        </Box>
      </Step>
      {composition && (
        <Step number="2" title="Add Composition">
          <Text>
            Copy the code snippet below into <Code>~/components/ui/{composition[0].file}</Code>
          </Text>
          <CodePreviewTabs defaultValue={framework} examples={composition} />
          <Text>
            Extend <Code>~/components/ui/index.ts</Code> with the following line:
          </Text>
          <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
            <CodePreview html={compositionExport} code={composition[0].exports} />
          </Box>
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
