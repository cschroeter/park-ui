import { parse } from 'node:path'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { globby } from 'globby'

const frameworks = ['react', 'solid', 'vue']

const programm = pipe(
  Effect.forEach(frameworks, (framework) =>
    Effect.all([
      pipe(
        Effect.promise(() =>
          globby([`../components/${framework}/src/components/ui/primitives/*.tsx`]),
        ),
        Effect.flatMap((files) =>
          pipe(
            Effect.all([
              Effect.forEach(files, (file) =>
                pipe(
                  Effect.all([
                    Effect.succeed(parse(file).name),
                    Effect.promise(() => fs.readFile(file, 'utf-8')),
                    pipe(
                      Effect.tryPromise({
                        try: () => fs.readFile(file.replace('/primitives', ''), 'utf-8'),
                        catch: () => new Error('No composition file found'),
                      }),
                      Effect.catchAll(() => Effect.succeed(undefined)),
                    ),
                  ]),
                  Effect.flatMap(([component, primitive, composition]) =>
                    Effect.promise(() =>
                      fs.outputJSON(
                        `../website/public/registry/latest/${framework}/components/${component}.json`,
                        {
                          id: parse(file).name,
                          name: toTitleCase(parse(file).name),
                          filename: parse(file).base,
                          variants: { primitive, composition },
                        },
                      ),
                    ),
                  ),
                ),
              ),
              Effect.promise(() =>
                fs.outputJSON(
                  `../website/public/registry/latest/${framework}/components/index.json`,
                  files.sort().map((file) => ({
                    id: parse(file).name,
                    name: toTitleCase(parse(file).name),
                  })),
                ),
              ),
            ]),
          ),
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
                    [data],
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

const toTitleCase = (str: string) => str.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
