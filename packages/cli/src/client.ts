import { createFetch, createSchema } from '@better-fetch/fetch'
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

export const client = {
  getComponent: (params: Params) => $fetch('/components/:framework/:id', { params }),
  getComponentIds: (framework: Framework) =>
    $fetch('/components/:framework/index', { params: { framework } }),
}
