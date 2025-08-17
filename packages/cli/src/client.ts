import { createFetch, createSchema } from '@better-fetch/fetch'
import { registryItem } from './schema'

const schema = createSchema({
  '/components/:framework/:id': {
    output: registryItem,
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
  fetchComponent: (params: Params) => $fetch('/components/:framework/:id', { params }),
}
