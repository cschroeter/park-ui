import { join } from 'node:path'
import { Effect, pipe } from 'effect'
import { readJson } from 'fs-extra'
import { CodePreviewTabs } from '~/components/code-preview-tabs'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'

export const Snippet = async () => {
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
        Effect.catchAll(() => Effect.succeed([{ content: 'Not yet available' }])),
        Effect.map((files) => files[0].content),
        Effect.flatMap((code) =>
          Effect.promise(() => highlight(code)).pipe(
            Effect.map((html) => ({
              label: framework,
              value: framework,
              code,
              html,
            })),
          ),
        ),
      ),
    ),
  )
  const examples = await Effect.runPromise(programm)

  return <CodePreviewTabs defaultValue={framework} examples={examples} />
}
