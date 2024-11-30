import { readFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { Effect, Schema, pipe } from 'effect'
import { globby } from 'globby'
import { highlight } from '~/lib/shiki'

const SourceFile = Schema.Struct({
  filename: Schema.String,
  content: Schema.String,
})

const SourceFiles = Schema.Array(SourceFile)

interface FindSourceFilesProps {
  blockId: string
  variantId: string
  framework: string
}

export const findSourceFiles = ({ blockId, variantId, framework }: FindSourceFilesProps) =>
  Effect.runPromise(
    pipe(
      Effect.succeed(
        `../components/${framework}/src/plus/blocks/${blockId}/${variantId}/*.{vue,tsx,ts}`,
      ),
      Effect.map((blockPath) => join(process.cwd(), blockPath)),
      Effect.flatMap((pattern) =>
        pipe(
          Effect.promise(() => globby(pattern)),
          Effect.flatMap((files) =>
            Effect.forEach(files, (file) =>
              pipe(
                Effect.promise(() => readFile(file, 'utf-8')),
                Effect.flatMap((content) =>
                  pipe(
                    Effect.promise(() => highlight(content, framework)),
                    Effect.map((html) => ({
                      filename: basename(file),
                      content,
                      html,
                    })),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  )
