import path from 'node:path'
import * as p from '@clack/prompts'
import { Effect, pipe } from 'effect'
import fs from 'fs-extra'
import { type Framework, getComponent, getRecipe, listComponents } from './client'
import { updateComponentIndex } from './update-component-index'
import { updateRecipeIndex } from './update-recipe-index'

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
      Effect.flatMap(({ data: { sourceCode, filename, exportsConfig } }) =>
        Effect.all([
          Effect.promise(() => fs.outputFile(path.join(dest, filename), sourceCode)),
          Effect.promise(() => updateComponentIndex({ exportsConfig, dest })),
        ]),
      ),
      Effect.catchAll(() => {
        p.log.error(`Failed to install component: ${id}`)
        return Effect.succeed(undefined)
      }),
    )

export const installRecipe =
  ({ dest }: Args) =>
  (id: string) =>
    pipe(
      Effect.tryPromise({
        try: () => getRecipe(id),
        catch: () => HttpError,
      }),
      Effect.filterOrFail(
        (result) => 'data' in result && result.data !== null,
        () => HttpError,
      ),
      Effect.flatMap(({ data: { id, recipe, filename, hasSlots } }) =>
        Effect.all([
          Effect.promise(() => fs.outputFile(path.join(dest, filename), recipe)),
          Effect.promise(() => updateRecipeIndex({ recipe: { name: id, hasSlots }, dest })),
        ]),
      ),
      Effect.catchAll(() => {
        p.log.error(`Failed to install recipe: ${id}`)
        return Effect.succeed(undefined)
      }),
    )

export const getComponentList = (framework: Framework, all: boolean, components: string[]) =>
  all
    ? pipe(
        Effect.tryPromise({
          try: () => listComponents(framework),
          catch: () => HttpError,
        }),
        Effect.filterOrFail(
          (result) => 'data' in result && result.data !== null,
          () => HttpError,
        ),
        Effect.map(({ data }) => data.map((component) => component.id)),
        Effect.catchAll(() => Effect.succeed([])),
      )
    : Effect.succeed(components)

const HttpError = {
  _tag: 'HttpError',
}
