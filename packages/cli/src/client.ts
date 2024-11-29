import { FetchHttpClient, HttpClient, HttpClientResponse } from '@effect/platform'
import { Effect, Schema } from 'effect'
import type { Config } from './get-config'

const API_URL = 'https://park-ui.com/registry/latest'

const Utils = Schema.Array(
  Schema.Struct({
    filename: Schema.String,
    content: Schema.String,
  }),
)

const Recipe = Schema.Struct({
  id: Schema.String,
  filename: Schema.String,
  content: Schema.String,
})

const Components = Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
)

const Component = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  variants: Schema.Array(
    Schema.Struct({
      file: Schema.String,
      content: Schema.String,
    }),
  ),
})

export type Component = Schema.Schema.Type<typeof Component>

export const fetchComponentById = (id: string, config: Config) =>
  Effect.all([
    HttpClient.get(`${API_URL}/${config.framework}/components/${id}.json`).pipe(
      Effect.flatMap(HttpClientResponse.schemaBodyJson(Component)),
      Effect.scoped,
      Effect.provide(FetchHttpClient.layer),
    ),
    HttpClient.get(`${API_URL}/recipes/${id}.json`).pipe(
      Effect.flatMap(HttpClientResponse.schemaBodyJson(Recipe)),
      Effect.catchAll(() => Effect.succeed(null)),
      Effect.scoped,
      Effect.provide(FetchHttpClient.layer),
    ),
  ]).pipe(
    Effect.map(([component, recipe]) => ({
      component,
      recipe,
    })),
  )

export const fetchUtils = (config: Config) =>
  HttpClient.get(`${API_URL}/${config.framework}/utils/index.json`).pipe(
    Effect.flatMap(HttpClientResponse.schemaBodyJson(Utils)),
    Effect.scoped,
    Effect.provide(FetchHttpClient.layer),
  )

interface Args {
  components: string[]
  all?: boolean
}

export const fetchComponents = (config: Config, args: Args) =>
  args.all
    ? HttpClient.get(`${API_URL}/${config.framework}/components`).pipe(
        Effect.flatMap(HttpClientResponse.schemaBodyJson(Components)),
        Effect.scoped,
        Effect.provide(FetchHttpClient.layer),
        Effect.flatMap((components) =>
          Effect.forEach(components, (component) => fetchComponentById(component.id, config), {
            concurrency: 10,
          }),
        ),
      )
    : Effect.forEach(args.components, (id) => fetchComponentById(id, config))
