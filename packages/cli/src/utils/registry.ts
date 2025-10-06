import { BetterFetchError, createFetch, createSchema } from '@better-fetch/fetch'
import { Effect } from 'effect'
import { type Framework, registryIndexList, registryItem } from '../schema'
import { HttpError, RegistryItemNotFound } from './errors'

const schema = createSchema({
  '/:framework/index': {
    output: registryIndexList,
  },
  '/:framework/:id': {
    output: registryItem,
  },
  '/theme/index': {
    output: registryIndexList,
  },
  '/theme/:id': {
    output: registryItem,
  },
})

const $fetch = createFetch({
  baseURL: 'https://next.park-ui.com/registry',
  throw: true,
  schema,
  plugins: [
    {
      id: 'json',
      name: 'JSON',
      init: (url, options) => ({
        url: `${url}.json`,
        options,
      }),
    },
  ],
  onError: (e) => {
    console.log(e)
  },
})

export const registry = {
  getColors: () =>
    Effect.tryPromise({
      try: () => $fetch('/theme/index'),
      catch: (e) => {
        console.log(e)
        return HttpError
      },
    }).pipe(Effect.map((item) => item.filter((i) => i.type === 'registry:color'))),
  getComponents: (framework: Framework) =>
    Effect.tryPromise({
      try: () => $fetch('/:framework/index', { params: { framework } }),
      catch: () => HttpError,
    }).pipe(Effect.map((item) => item.filter((i) => i.type === 'registry:ui'))),
  getRegistryItem: (params: { framework: Framework; id: string }) =>
    Effect.tryPromise({
      try: () => $fetch('/:framework/:id', { params }),
      catch: (e) => {
        if (e instanceof BetterFetchError) {
          if (e.status === 404) return RegistryItemNotFound
        }
        return HttpError
      },
    }),
  getRegistryThemeItem: (id: string) =>
    Effect.tryPromise({
      try: () => $fetch('/theme/:id', { params: { id } }),
      catch: (e) => {
        if (e instanceof BetterFetchError) {
          if (e.status === 404) return RegistryItemNotFound
        }
        return HttpError
      },
    }),
}
