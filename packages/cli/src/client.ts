import { HttpClient, HttpClientRequest, HttpClientResponse } from '@effect/platform'
import { Schema } from '@effect/schema'
import { Effect, Schedule } from 'effect'

const API_URL =
  'https://park-ui-docs-wd6obtel3-christian-schrters-projects.vercel.app/registry/latest/react/components'

const Components = Schema.Struct({
  components: Schema.Array(
    Schema.Struct({
      name: Schema.String,
      href: Schema.String,
    }),
  ),
})

const Component = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  filename: Schema.String,
  variants: Schema.Struct({
    primitive: Schema.String,
    composition: Schema.optional(Schema.String),
  }),
})

const Helpers = Schema.Array(
  Schema.Struct({
    filename: Schema.String,
    content: Schema.String,
  }),
)

// TODO Could need some refactoring

export const fetchComponents = () =>
  HttpClientRequest.get(API_URL).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Components),
    Effect.timeout('1 seconds'),
    Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
    Effect.map((response) => response.components),
  )

export const fetchComponentById = (id: string) =>
  HttpClientRequest.get(`${API_URL}/${id}.json`).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Component),
    Effect.timeout('1 seconds'),
    Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
  )

export const fetchComponentByUrl = (url: string) =>
  HttpClientRequest.get(url).pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Component),
    Effect.timeout('1 seconds'),
    Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
  )

export const fetchHelpers = () =>
  HttpClientRequest.get('https://park-ui.com/registry/panda/react/helpers').pipe(
    HttpClient.fetchOk,
    HttpClientResponse.schemaBodyJsonScoped(Helpers),
    Effect.timeout('1 seconds'),
    Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
  )
