import path from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { type Framework, getComponent, getRecipe } from './client'

interface Args {
  framework: Framework
  dest: string
}

export const installComponent =
  ({ framework, dest }: Args) =>
  (id: string) =>
    pipe(
      Effect.tryPromise({
        try: () => getComponent({ framework, id }),
        catch: () => HttpError,
      }),
      Effect.filterOrFail(
        (result) => 'data' in result && result.data !== null,
        () => HttpError,
      ),
      Effect.flatMap(({ data: { sourceCode, filename } }) =>
        Effect.promise(() => fs.outputFile(path.join(dest, filename), sourceCode)),
      ),
      Effect.catchAll(() => {
        p.log.error(`Failed to install component: ${id}`)
        return Effect.succeed(undefined)
      }),
    )

export const installRecipe =
  ({ framework, dest }: Args) =>
  (id: string) =>
    pipe(
      Effect.tryPromise({
        try: () => getRecipe({ framework, id }),
        catch: () => HttpError,
      }),
      Effect.filterOrFail(
        (result) => 'data' in result && result.data !== null,
        () => HttpError,
      ),
      Effect.flatMap(({ data: { recipe, filename } }) =>
        Effect.promise(() => fs.outputFile(path.join(dest, filename), recipe)),
      ),
      Effect.catchAll(() => {
        p.log.error(`Failed to install recipe: ${id}`)
        return Effect.succeed(undefined)
      }),
    )

const HttpError = {
  _tag: 'HttpError',
}
