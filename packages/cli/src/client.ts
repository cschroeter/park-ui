import { HttpClient, HttpClientRequest, HttpClientResponse } from '@effect/platform'
import { Schema } from '@effect/schema'
import { Effect, Schedule } from 'effect'
import type { Config } from './get-config'

const API_URL = 'https://park-ui.com/registry/latest'

const Components = Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
  }),
)

const Component = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  filename: Schema.String,
  variants: Schema.Struct({
    primitive: Schema.String,
    composition: Schema.optional(Schema.String),
  }),
})

export type Component = Schema.Schema.Type<typeof Component>

const Helpers = Schema.Array(
  Schema.Struct({
    filename: Schema.String,
    content: Schema.String,
  }),
)

export const fetchComponentById = (id: string, config: Config) =>
  HttpClientRequest.get(`${API_URL}/${config.jsFramework}/components/${id}.json`).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Component),
    Effect.timeout('1 seconds'),
    Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
  )

export const fetchHelpers = (config: Config) =>
  HttpClientRequest.get(`${API_URL}/${config.jsFramework}/helpers`).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Helpers),
    Effect.timeout('1 seconds'),
    Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
  )

interface Args {
  components: string[]
  all?: boolean
}

export const fetchComponents = (config: Config, args: Args) =>
  args.all
    ? HttpClientRequest.get(`${API_URL}/${config.jsFramework}/components`)
        .pipe(
          HttpClient.fetchOk,
          HttpClientResponse.schemaBodyJsonScoped(Components),
          Effect.timeout('1 seconds'),
          Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
        )
        .pipe(
          Effect.flatMap((components) =>
            Effect.forEach(components, (component) => fetchComponentById(component.id, config), {
              concurrency: 10,
            }),
          ),
        )
    : Effect.forEach(args.components, (id) => fetchComponentById(id, config))
