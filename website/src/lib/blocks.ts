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

export const fetchCategories = () =>
  Effect.runPromise(
    HttpClientRequest.get('http://localhost:3000/plus/api/categories').pipe(
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
    }),
  ),
})

export const fetchCategory = (category: string) =>
  Effect.runPromise(
    HttpClientRequest.get(`http://localhost:3000/plus/api/categories/${category}`).pipe(
      HttpClient.fetchOk,
      HttpClientResponse.schemaBodyJsonScoped(Category),
      Effect.timeout('1 seconds'),
      Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
      Effect.catchAll(() => Effect.succeed(null)),
    ),
  )

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
      `http://localhost:3000/plus/api/categories/${categoryId}/variants/${variantId}/sources`,
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
