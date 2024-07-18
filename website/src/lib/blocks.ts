import { Schema } from '@effect/schema'

const SourceFile = Schema.Struct({
  filename: Schema.String,
  content: Schema.String,
})

const SourceFiles = Schema.Array(SourceFile)

interface FetchSourceFilesProps {
  categoryId: string
  variantId: string
}

// export const fetchSourceFiles = ({ categoryId, variantId }: FetchSourceFilesProps) =>
//   Effect.runPromise(
//     HttpClientRequest.get(
//       `${PARK_PLUS_URL}/api/categories/${categoryId}/variants/${variantId}/sources`,
//       {
//         headers: {
//           Authorization: PARK_PLUS_API_KEY,
//         },
//       },
//     ).pipe(
//       HttpClient.fetchOk,
//       HttpClientResponse.schemaBodyJsonScoped(SourceFiles),
//       Effect.timeout('1 seconds'),
//       Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
//       Effect.flatMap((files) =>
//         Effect.forEach(files, (file) =>
//           pipe(
//             Effect.promise(() => highlight(file.content)),
//             Effect.flatMap((html) => Effect.succeed({ ...file, html })),
//           ),
//         ),
//       ),
//       Effect.catchAll(() => Effect.succeed([])),
//     ),
//   )
