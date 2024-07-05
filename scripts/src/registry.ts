import { parse } from 'node:path'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { globby } from 'globby'

const frameworks = ['react', 'solid', 'vue']

const programm = pipe(
  Effect.forEach(frameworks, (framework) =>
    Effect.all([
      pipe(
        Effect.promise(() => globby([`../components/${framework}/src/components/ui/**/*.tsx`])),
        Effect.map(
          (components) =>
            components.reduce((acc, component) => {
              const name = parse(component).name
              if (!acc[name]) {
                acc[name] = []
              }
              acc[name].push(component)
              return acc
            }, {}) as Record<string, string[]>,
        ),
        Effect.flatMap((components) =>
          Effect.all([
            Effect.forEach(Object.entries(components), ([component, files]) =>
              pipe(
                Effect.forEach(files, (file) =>
                  pipe(
                    Effect.promise(() => fs.readFile(file, 'utf-8')),
                    Effect.map((content) => ({
                      filename: `./${file.replace(`../components/${framework}/src/components/ui/`, '')}`,
                      content,
                    })),
                  ),
                ),
                Effect.flatMap((data) =>
                  Effect.promise(() =>
                    fs.outputJSON(
                      `../website/public/registry/latest/${framework}/components/${component}.json`,
                      data,
                    ),
                  ),
                ),
              ),
            ),
            Effect.promise(() =>
              fs.outputJSON(
                `../website/public/registry/latest/${framework}/components/index.json`,
                Object.keys(components)
                  .sort()
                  .map((component) => ({
                    id: component,
                  })),
              ),
            ),
          ]),
        ),
      ),
      pipe(
        Effect.promise(() => globby([`../components/${framework}/src/lib/**/*.tsx`])),
        Effect.flatMap((helpers) =>
          Effect.forEach(helpers, (helper) =>
            pipe(
              Effect.promise(() => fs.readFile(helper, 'utf-8')),
              Effect.map((content) => ({
                filename: parse(helper).base,
                content,
              })),
              Effect.flatMap((data) =>
                Effect.promise(() =>
                  fs.outputJSON(
                    `../website/public/registry/latest/${framework}/helpers/index.json`,
                    data,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ]),
  ),
)

Effect.runPromise(programm)
