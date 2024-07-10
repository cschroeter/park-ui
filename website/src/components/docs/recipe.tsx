import { join } from 'node:path'
import { Effect, pipe } from 'effect'
import { readFile } from 'fs-extra'
import { Box } from 'styled-system/jsx'
import { CodePreview } from '~/components/code-preview'
import { getServerContext } from '~/lib/server-context'
import { highlight } from '~/lib/shiki'

export const Recipe = async () => {
  const { component } = getServerContext()
  const path = join(process.cwd(), `../packages/panda/src/theme/recipes/${component}.ts`)

  const programm = pipe(
    Effect.tryPromise({
      try: () => readFile(path, 'utf8'),
      catch: () => new Error('Recipe not found'),
    }),
    Effect.catchAll(() => Effect.succeed('Not yet available')),
    Effect.flatMap((code) =>
      Effect.promise(() => highlight(code)).pipe(
        Effect.map((html) => ({
          code,
          html,
        })),
      ),
    ),
  )

  const { code, html } = await Effect.runPromise(programm)

  return (
    <Box borderRadius="l3" overflow="hidden" divideY="1px" borderWidth="1px" className="not-prose">
      <CodePreview html={html} code={code} />
    </Box>
  )
}
