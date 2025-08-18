import { BetterFetchError, createFetch, createSchema } from '@better-fetch/fetch'
import { Effect } from 'effect'
import { HttpError, NotFound } from './error'
import { registryIndexList, registryItem } from './schema'

const schema = createSchema({
  '/components/:framework/:id': {
    output: registryItem,
  },
  '/components/:framework/index': {
    output: registryIndexList,
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

type Framework = 'react' | 'vue' | 'svelte' | 'solid'

interface Params {
  framework: Framework
  id: string
}

export const registry = {
  getComponent: (params: Params) =>
    Effect.tryPromise({
      try: () => $fetch('/components/:framework/:id', { params }),
      catch: (e) => {
        if (e instanceof BetterFetchError) {
          if (e.status === 404) return NotFound
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
