import { HttpClient, HttpClientRequest, HttpClientResponse } from '@effect/platform'
import { Schema } from '@effect/schema'
import { Effect, Schedule, pipe } from 'effect'
import { highlight } from './shiki'

const Categories = Schema.Array(
  Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    figmaNodeId: Schema.String,
    variantCount: Schema.Number,
  }),
)

const { PARK_PLUS_URL, PARK_PLUS_API_KEY } = process.env

export const fetchCategories = () =>
  Effect.runPromise(
    HttpClientRequest.get(`${PARK_PLUS_URL}/api/categories`, {
      headers: {
        Authorization: PARK_PLUS_API_KEY,
      },
    }).pipe(
      HttpClient.fetchOk,
      HttpClientResponse.schemaBodyJsonScoped(Categories),
      Effect.timeout('1 seconds'),
      Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
      Effect.catchAll(() => Effect.succeed([])),
    ),
  )

const Category = Schema.Struct({
  id: Schema.String,
  name: Schema.String,
  figmaNodeId: Schema.String,
  description: Schema.String,
  variants: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      accessLevel: Schema.Union(Schema.Literal('free'), Schema.Literal('paid')),
    }),
  ),
})

export const fetchCategory = async (category: string) => {
  await fetch(`${PARK_PLUS_URL}/api/categories/${category}`, {
    cache: 'no-cache',
    headers: {
      Authorization: PARK_PLUS_API_KEY ?? '',
    },
  })
    .then((res) => res.json())
    .catch(() => [])

  return Effect.runPromise(
    HttpClientRequest.get(`${PARK_PLUS_URL}/api/categories/${category}`, {
      headers: {
        Authorization: PARK_PLUS_API_KEY,
      },
    }).pipe(
      HttpClient.fetchOk,
      HttpClientResponse.schemaBodyJsonScoped(Category),
      Effect.timeout('1 seconds'),
      Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
      Effect.catchAll(() => Effect.succeed(null)),
    ),
  )
}

const SourceFile = Schema.Struct({
  filename: Schema.String,
  content: Schema.String,
})

const SourceFiles = Schema.Array(SourceFile)

interface FetchSourceFilesProps {
  categoryId: string
  variantId: string
}

export const fetchSourceFiles = ({ categoryId, variantId }: FetchSourceFilesProps) =>
  Effect.runPromise(
    HttpClientRequest.get(
      `${PARK_PLUS_URL}/api/categories/${categoryId}/variants/${variantId}/sources`,
      {
        headers: {
          Authorization: PARK_PLUS_API_KEY,
        },
      },
    ).pipe(
      HttpClient.fetchOk,
      HttpClientResponse.schemaBodyJsonScoped(SourceFiles),
      Effect.timeout('1 seconds'),
      Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
      Effect.flatMap((files) =>
        Effect.forEach(files, (file) =>
          pipe(
            Effect.promise(() => highlight(file.content)),
            Effect.flatMap((html) => Effect.succeed({ ...file, html })),
          ),
        ),
      ),
      Effect.catchAll(() => Effect.succeed([])),
    ),
  )
