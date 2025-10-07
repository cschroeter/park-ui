import { BetterFetchError, createFetch, createSchema } from '@better-fetch/fetch'
import { Effect, pipe } from 'effect'
import { type Framework, type RegistryItem, registryIndexList, registryItem } from '../schema'
import { HttpError, RegistryItemNotFound } from './errors'
import { ParkUIConfig } from './park-ui-config'

interface Params {
  ids: string[]
}

export const fetchRegistryThemeIndex = () =>
  Effect.tryPromise({
    try: () => $fetch('/theme/index', {}),
    catch: () => HttpError,
  })

export const fetchRegistryIndex = () =>
  ParkUIConfig.pipe(
    Effect.flatMap(({ framework }) =>
      Effect.tryPromise({
        try: () => $fetch('/:framework/index', { params: { framework } }),
        catch: () => HttpError,
      }),
    ),
  )

export const fetchRegistryThemeItems = (ids: string[]) =>
  Effect.all(ids.map((id) => fetchRegistryItem('/theme/:id', { id })))

export const fetchRegistryItems = ({ ids }: Params) =>
  ParkUIConfig.pipe(
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
  baseURL: 'https://next.park-ui.com/registry',
  throw: true,
  schema: createSchema({
    '/:framework/index': { output: registryIndexList },
    '/:framework/:id': { output: registryItem },
    '/theme/index': { output: registryIndexList },
    '/theme/:id': { output: registryItem },
  }),
  plugins: [
    {
      id: 'json',
      name: 'JSON',
      init: (url, options) => ({ url: `${url}.json`, options }),
    },
  ],
})
