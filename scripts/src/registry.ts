import { parse } from 'node:path'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { globby } from 'globby'

const frameworks = ['react', 'solid', 'vue']

const programm = pipe(
  Effect.forEach(frameworks, (framework) =>
    pipe(
      Effect.promise(() => globby([`../components/${framework}/src/components/ui/*.tsx`])),
      Effect.flatMap((components) =>
        Effect.forEach(components, (component) =>
          pipe(
            Effect.promise(() => fs.readFile(component, 'utf-8')),
            Effect.map((content) => ({
              files: [
                {
                  filename: parse(component).base,
                  hasMultipleParts: content.includes('createStyleContext'),
                  content,
                },
              ],
            })),
            Effect.flatMap((data) =>
              Effect.promise(() =>
                fs.outputJSON(
                  `../website/public/registry/latest/${framework}/components/${parse(component).name}.json`,
                  data,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  ),
)

Effect.runPromise(programm)
