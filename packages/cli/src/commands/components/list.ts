import { Command } from '@effect/cli'
import { Console, Effect, pipe } from 'effect'
import { fetchComponents } from '~/client'

export const list = Command.make('list', {}, () =>
  pipe(
    fetchComponents(),
    Effect.map((components) => components.map((component) => component.name)),
    Effect.flatMap((components) => Console.log(components)),
  ),
)
