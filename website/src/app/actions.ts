'use server'
import { Effect, Match, Schema, pipe } from 'effect'
import { auth, signIn } from '~/lib/auth'
import { prisma } from '~/lib/prisma'

export const signInWithEmail = async (formData: FormData) =>
  await signIn('postmark', {
    email: formData.get('email'),
    redirectTo: formData.get('redierctTo')?.toString() ?? '/',
  })

export const signIngWithGithub = async (formData: FormData) =>
  signIn('github', { redirectTo: formData.get('redirectTo')?.toString() ?? '/' })

export const signInWithGoogle = async (formData: FormData) =>
  signIn('google', { redirectTo: formData.get('redirectTo')?.toString() ?? '/' })

const Input = Schema.Struct({
  licenseKey: Schema.String.pipe(Schema.pattern(/^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/)),
})

export const activateLicense = async (_: unknown, formData: FormData) =>
  Effect.runPromise(
    pipe(
      Effect.all([
        pipe(
          Effect.promise(() => auth()),
          Effect.map((session) => session?.user?.id),
          Effect.filterOrFail(
            (userId): userId is string => typeof userId === 'string',
            () => new UnauthorizedError(),
          ),
        ),
        pipe(
          Schema.decodeUnknown(Input)({ licenseKey: formData.get('licenseKey') }),
          Effect.map((input) => input.licenseKey),
          Effect.flatMap((key) =>
            Effect.tryPromise({
              try: () => prisma.licenseKey.findUniqueOrThrow({ where: { key } }),
              catch: (e) =>
                Match.value(e).pipe(
                  Match.when({ code: 'P2025' }, () => new NotFoundError(key)),
                  Match.orElse(() => new InternalServerError()),
                ),
            }),
          ),
          Effect.filterOrFail(
            (licenseKey) => licenseKey.userId === null,
            () => new ConflictError(),
          ),
        ),
      ]),
      Effect.flatMap(([userId, licenseKey]) =>
        Effect.tryPromise({
          try: () =>
            prisma.licenseKey.update({
              where: { id: licenseKey.id },
              data: {
                user: {
                  connect: { id: userId },
                },
              },
            }),
          catch: () => new InternalServerError(),
        }),
      ),
      Effect.map(() => ({ success: true, message: 'License key activated' })),
      Effect.catchTags({
        ParseError: () => Effect.succeed({ success: false, message: 'License key is invalid' }),
        UnauthorizedError: () =>
          Effect.succeed({ success: false, message: 'Please log in to activate your license key' }),
        NotFoundError: () => Effect.succeed({ success: false, message: 'License key not found' }),
        ConflictError: () =>
          Effect.succeed({ success: false, message: 'License key is already in use' }),
        InternalServerError: () =>
          Effect.succeed({ success: false, message: 'An unexpcted error occured' }),
      }),
    ),
  )

export const hasUserPermission = async () =>
  Effect.runPromise(
    pipe(
      Effect.promise(() => auth()),
      Effect.map((session) => session?.user?.id),
      Effect.filterOrFail(
        (userId): userId is string => typeof userId === 'string',
        () => new Error(),
      ),
      Effect.flatMap((userId) =>
        Effect.tryPromise({
          try: () =>
            prisma.licenseKey.findFirst({
              where: { userId },
            }),
          catch: () => new Error(),
        }),
      ),
      Effect.map((license) => license !== null),
      Effect.catchAll(() => Effect.succeed(false)),
    ),
  )

export const findLicenseKeysByOrderId = async (externalId: string): Promise<string | string[]> =>
  Effect.runPromise(
    pipe(
      Effect.tryPromise({
        try: () =>
          prisma.order.findUniqueOrThrow({
            where: { externalId },
            include: { orderItems: { include: { licenseKey: true } } },
          }),
        catch: (e) =>
          Match.value(e).pipe(
            Match.when({ code: 'P2025' }, () => new Error()),
            Match.orElse(() => new Error()),
          ),
      }),
      Effect.map((order) => order.orderItems.map((item) => item.licenseKey.key)),
      Effect.catchAll(() => Effect.succeed([])),
    ),
  )

class InternalServerError {
  readonly _tag = 'InternalServerError'
}

class NotFoundError {
  readonly _tag = 'NotFoundError'
  constructor(readonly id: string) {}
}

class ConflictError {
  readonly _tag = 'ConflictError'
}

class UnauthorizedError {
  readonly _tag = 'UnauthorizedError'
}
