import { BetterFetchError, createFetch, createSchema } from '@better-fetch/fetch'
import { Effect } from 'effect'
import { type Framework, registryIndexList, registryItem } from '../schema'
import { HttpError, RegistryItemNotFound } from './errors'

const schema = createSchema({
  '/components/:framework/:id': {
    output: registryItem,
  },
  '/components/:framework/index': {
    output: registryIndexList,
  },
  '/theme/colors/gray/:id': {
    output: registryItem,
  },
  '/theme/colors/gray/index': {
    output: registryIndexList,
  },
  '/theme/colors/accent/index': {
    output: registryIndexList,
  },
  '/theme/colors/accent/:id': {
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
})

interface Params {
  framework: Framework
  id: string
}

export const registry = {
  getAcccentColors: () =>
    Effect.tryPromise({
      try: () => $fetch('/theme/colors/accent/index'),
      catch: () => HttpError,
    }).pipe(Effect.map((item) => item.map((i) => i.id))),
  getGrayColors: () =>
    Effect.tryPromise({
      try: () => $fetch('/theme/colors/gray/index'),
      catch: () => HttpError,
    }).pipe(Effect.map((item) => item.map((i) => i.id))),
  getGrayColor: (params: Omit<Params, 'framework'>) =>
    Effect.tryPromise({
      try: () => $fetch('/theme/colors/gray/:id', { params }),
      catch: () => HttpError,
    }),
  getAccentColor: (params: Omit<Params, 'framework'>) =>
    Effect.tryPromise({
      try: () => $fetch('/theme/colors/accent/:id', { params }),
      catch: () => HttpError,
    }),
  getComponent: (params: Params) =>
    Effect.tryPromise({
      try: () => $fetch('/components/:framework/:id', { params }),
      catch: (e) => {
        if (e instanceof BetterFetchError) {
          if (e.status === 404) return RegistryItemNotFound
        }
        return HttpError
      },
    }),
  getComponentIds: (params: Omit<Params, 'id'>) =>
    Effect.tryPromise({
      try: () => $fetch('/components/:framework/index', { params }),
      catch: () => HttpError,
    }).pipe(Effect.map((item) => item.map((i) => i.id))),
}
