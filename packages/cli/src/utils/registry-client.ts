import { BetterFetchError, createFetch, createSchema } from '@better-fetch/fetch'
import { Effect, pipe } from 'effect'
import { type Framework, type RegistryItem, registryIndexList, registryItem } from '../schema'
import { Config } from './config'
import { HttpError, RegistryItemNotFound } from './errors'

interface Params {
  ids: string[]
}

export const fetchColors = () =>
  pipe(
    Effect.tryPromise({
      try: () => $fetch('/:framework/index', { params: { framework: 'react' } }),
      catch: () => HttpError,
    }),
    Effect.map((items) => items.filter((item) => item.type === 'registry:color')),
    Effect.map((colors) => {
      const grayColorNames = ['neutral', 'mauve', 'slate', 'sage', 'olive', 'sand']
      const isGrayColor = (name: string) => grayColorNames.includes(name)

      const accentColors = colors.map(({ name }) => ({ value: name }))
      const neutralColors = colors
        .filter((color) => isGrayColor(color.name))
        .map(({ name }) => ({ value: name }))

      return { accentColors, neutralColors }
    }),
  )

export const fetchRegistryIndex = () =>
  Config.pipe(
    Effect.flatMap(({ framework }) =>
      Effect.tryPromise({
        try: () => $fetch('/:framework/index', { params: { framework } }),
        catch: () => HttpError,
      }),
    ),
  )

export const fetchRegistryItems = ({ ids }: Params) =>
  Config.pipe(
    Effect.flatMap(({ framework }) =>
      pipe(
        fetchRegistryItemsRecursive(ids, new Set(), framework),
        Effect.map((items) => Array.from(items.values())),
      ),
    ),
  )

const fetchRegistryItemsRecursive = (
  ids: string[],
  visited: Set<string>,
  framework: Framework,
): Effect.Effect<Map<string, RegistryItem>, unknown, never> => {
  const newIds = ids.filter((id) => !visited.has(id))
  if (newIds.length === 0) return Effect.succeed(new Map())

  newIds.forEach((id) => {
    visited.add(id)
  })

  return pipe(
    Effect.all(newIds.map((id) => fetchRegistryItem('/:framework/:id', { framework, id }))),
    Effect.flatMap((items) =>
      pipe(
        fetchRegistryItemsRecursive(
          items.flatMap((item) => item.registryDependencies ?? []),
          visited,
          framework,
        ),
        Effect.map(
          (depItems) => new Map([...new Map(items.map((item) => [item.name, item])), ...depItems]),
        ),
      ),
    ),
  )
}

const fetchRegistryItem = (
  url: string,
  params: Record<string, string>,
): Effect.Effect<RegistryItem, typeof RegistryItemNotFound | typeof HttpError> =>
  Effect.tryPromise({
    try: () => $fetch(url, { params }),
    catch: (e) =>
      e instanceof BetterFetchError && e.status === 404 ? RegistryItemNotFound : HttpError,
  })

const $fetch = createFetch({
  baseURL: 'https://park-ui.com/registry',
  throw: true,
  schema: createSchema({
    '/:framework/index': { output: registryIndexList },
    '/:framework/:id': { output: registryItem },
  }),
  plugins: [
    {
      id: 'json',
      name: 'JSON',
      init: (url, options) => ({ url: `${url}.json`, options }),
    },
  ],
})
