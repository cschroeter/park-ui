import crypto from 'node:crypto'
import { Effect, Match, Schema, pipe } from 'effect'
import type { NextRequest } from 'next/server'
import { prisma } from '~/lib/prisma'

const Payload = Schema.Struct({
  meta: Schema.Struct({
    event_name: Schema.Literal('order_created', 'order_refunded'),
  }),
  data: Schema.Struct({
    id: Schema.String,
    attributes: Schema.Struct({
      first_order_item: Schema.Struct({
        product_name: Schema.Literal('Park UI Plus'),
        variant_name: Schema.Literal('Personal', 'Team'),
      }),
    }),
  }),
})

class InternalServerError {
  readonly _tag = 'InternalServerError'
}

export const POST = async (request: NextRequest) => {
  const programm = pipe(
    Effect.all([
      Effect.promise(() => request.text()),
      Effect.fromNullable(Buffer.from(request.headers.get('x-signature') as string, 'utf8')),
    ]),
    Effect.filterOrFail(
      ([text, signature]) => verifySignature(text, signature),
      () => new InternalServerError(),
    ),
    Effect.flatMap(([text]) => Schema.decodeUnknown(Payload)(JSON.parse(text))),
    Effect.flatMap(({ data, meta }) =>
      Match.value(meta.event_name).pipe(
        Match.when('order_created', () =>
          Effect.tryPromise({
            try: () =>
              prisma.order.create({
                data: {
                  externalId: data.id,
                  provider: 'LemonSqueezy',
                  orderItems: {
                    create: {
                      productName: data.attributes.first_order_item.product_name,
                      variantName: data.attributes.first_order_item.variant_name,
                      licenseKey: {
                        create: {
                          key: generateLicenseKey(),
                          type: data.attributes.first_order_item.variant_name,
                        },
                      },
                    },
                  },
                },
              }),
            catch: () => new InternalServerError(),
          }),
        ),
        Match.when('order_refunded', () =>
          pipe(
            Effect.tryPromise({
              try: () =>
                prisma.order.update({
                  where: { externalId: data.id },
                  data: { refunded: true },
                }),
              catch: () => new InternalServerError(),
            }),
            Effect.flatMap((order) =>
              Effect.tryPromise({
                try: () =>
                  prisma.licenseKey.updateMany({
                    data: { disabled: true },
                    where: { orderItem: { orderId: order.id } },
                  }),
                catch: () => new InternalServerError(),
              }),
            ),
          ),
        ),
        Match.exhaustive,
      ),
    ),
    Effect.map(() => ({ status: 200, message: 'OK' })),
    Effect.catchTags({
      ParseError: () => Effect.succeed({ status: 400, message: 'Payload is invalid' }),
      InternalServerError: () => Effect.succeed({ status: 500, message: 'Invalid signature' }),
    }),
  )
  const data = await Effect.runPromise(programm)

  return Response.json(data, { status: data.status })
}

const verifySignature = (text: string, signature: Buffer): boolean => {
  const hmac = crypto.createHmac('sha256', process.env.LEMON_SQUEEZY_WEBHOOK_SECRET)
  const digest = Buffer.from(hmac.update(text).digest('hex'), 'utf8')

  return crypto.timingSafeEqual(digest, signature)
}

const generateLicenseKey = () =>
  (
    Math.random()
      .toString(36)
      .substring(2)
      .substring(0, 9)
      .match(/.{1,3}/g) ?? []
  )
    .join('-')
    .toUpperCase()
