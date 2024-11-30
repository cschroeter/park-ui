import path, { parse } from 'node:path'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { globby } from 'globby'

const frameworks = ['react', 'solid', 'vue']

const programm = pipe(
  Effect.forEach(frameworks, (framework) =>
    Effect.all([
      pipe(
        Effect.promise(() => globby([`../components/${framework}/src/components/ui/styled/*.tsx`])),
        Effect.flatMap((files) =>
          pipe(
            Effect.all([
              Effect.forEach(files, (file) =>
                pipe(
                  Effect.all([
                    Effect.succeed(parse(file).name),
                    // resolve primitives
                    pipe(
                      Effect.all([Effect.promise(() => fs.readFile(file, 'utf-8'))]),
                      Effect.map(([content]) => {
                        return {
                          file: path.join('styled', parse(file).base),
                          content,
                        }
                      }),
                    ),
                    // resolve compositions
                    pipe(
                      Effect.all([
                        pipe(
                          Effect.tryPromise({
                            try: () => fs.readFile(file.replace('/styled', ''), 'utf-8'),
                            catch: () => new Error('No composition file found'),
                          }),
                          Effect.catchAll(() => Effect.succeed(undefined)),
                        ),
                      ]),
                      Effect.map(([content]) =>
                        content
                          ? {
                              file: parse(file).base,
                              content,
                            }
                          : undefined,
                      ),
                    ),
                  ]),
                  Effect.flatMap(([component, primitive, composition]) =>
                    Effect.promise(() =>
                      fs.outputJSON(
                        `../website/public/registry/latest/components/${framework}/${component}.json`,
                        {
                          id: parse(file).name,
                          name: toTitleCase(parse(file).name),
                          variants: [primitive, composition].filter(Boolean),
                        },
                      ),
                    ),
                  ),
                ),
              ),
              Effect.promise(() =>
                fs.outputJSON(
                  `../website/public/registry/latest/components/${framework}/index.json`,
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
        Effect.promise(() =>
          globby([`../components/${framework}/src/components/ui/styled/utils/*.tsx`]),
        ),
        Effect.flatMap((files) =>
          Effect.forEach(files, (file) =>
            pipe(
              Effect.promise(() => fs.readFile(file, 'utf-8')),
              Effect.map((content) => ({
                filename: path.join('styled/utils', parse(file).base),
                content,
              })),
              Effect.flatMap((data) =>
                Effect.promise(() =>
                  fs.outputJSON(`../website/public/registry/latest/utils/${framework}/index.json`, [
                    data,
                  ]),
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
