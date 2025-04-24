import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { Effect, pipe } from 'effect'
import { Box, Divider } from 'styled-system/jsx'
import { getFramework } from '~/lib/framework'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'
import { CodePreviewTabs } from '../code-preview-tabs'
import { ComponentPreview } from './component-preview'
import { controls } from '.velite'

export const ComponentPlayground = async () => {
  const { component } = getServerContext()
  const framework = await getFramework()
  const defaultControls = { component, props: {} }

  const componentControls =
    controls.filter((control) => control.component === component)[0] || defaultControls

  const programm = pipe(
    Effect.forEach(['react', 'solid', 'vue'] as const, (framework) =>
      pipe(
        Effect.succeed(
          path.join(
            process.cwd(),
            `../components/${framework}/src/demos/${component}.demo.${framework === 'vue' ? 'vue' : 'tsx'}`,
          ),
        ),
        Effect.flatMap((demoFile) =>
          Effect.tryPromise({
            try: () => readFile(demoFile, 'utf8'),
            catch: () => new Error('Snippet not found'),
          }),
        ),
        Effect.flatMap((code) =>
          Effect.promise(() => highlight(code, framework === 'vue' ? 'vue' : 'tsx')).pipe(
            Effect.map((html) => ({
              code,
              html,
            })),
          ),
        ),
        Effect.map(({ code, html }) => ({
          value: framework,
          label: framework,
          html,
          code,
        })),
        Effect.catchAll(() => Effect.succeed(undefined)),
      ),
    ),
    Effect.map((demos) => demos.filter((demo) => demo !== undefined)),
  )

  const demos = await Effect.runPromise(programm)

  return (
    <Box borderWidth="1px" borderRadius="l3" overflow="hidden" mt="12">
      <ComponentPreview controls={componentControls} />
      <Divider />
      <CodePreviewTabs
        defaultValue={framework}
        examples={demos}
        border="none"
        borderTopRadius="none"
      />
    </Box>
  )
}
