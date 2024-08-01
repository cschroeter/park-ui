import { HttpClient, HttpClientRequest, HttpClientResponse } from '@effect/platform'
import { Schema } from '@effect/schema'
import { Effect, Schedule, pipe } from 'effect'
import type { NextRequest } from 'next/server'

const Order = Schema.Struct({
  data: Schema.optional(
    Schema.Struct({
      attributes: Schema.Struct({
        refunded: Schema.Boolean,
      }),
    }),
  ),
})

const { FIGMA_KIT_URL, LEMON_SQUEEZY_API_KEY } = process.env

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url)

  const isValid = await Effect.runPromise(
    pipe(
      Effect.fromNullable(searchParams.get('order_id')),
      Effect.flatMap((orderId) =>
        pipe(
          HttpClientRequest.get(`https://api.lemonsqueezy.com/v1/orders/${orderId}`, {
            headers: {
              Accept: 'application/vnd.api+json',
              'Content-Type': 'application/vnd.api+json',
              Authorization: `Bearer ${LEMON_SQUEEZY_API_KEY}`,
            },
          }),
          HttpClient.fetchOk,
          HttpClientResponse.schemaBodyJsonScoped(Order),
          Effect.timeout('1 seconds'),
          Effect.retry(Schedule.exponential(200).pipe(Schedule.compose(Schedule.recurs(3)))),
        ),
      ),
      Effect.map((data) => !data.data?.attributes.refunded),
      Effect.catchAll(() => Effect.succeed(false)),
    ),
  )

  return Response.redirect(isValid ? FIGMA_KIT_URL : 'https://park-ui.com')
}
