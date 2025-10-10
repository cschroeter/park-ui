import * as p from '@clack/prompts'
import { Command } from 'commander'
import { Effect, Layer, pipe, Schema } from 'effect'
import color from 'picocolors'
import { Config, ConigSchema, saveConfig } from '~/utils/config'
import { install } from '~/utils/install'
import { updatePandaConfig, withPandaConfig } from '~/utils/panda-config'
import { promptInitConfig } from '~/utils/prompt'
import { fetchRegistryItems } from '~/utils/registry-client'
import { withTSConfig } from '~/utils/tsconfig'

export const init = new Command('init').description('').action(async () => {
  p.intro(`${color.bgCyan(color.black(' Park UI '))}`)

  const program = promptInitConfig().pipe(
    Effect.flatMap(({ framework, accentColor, grayColor, borderRadius }) =>
      pipe(
        saveConfig(framework),
        Effect.flatMap((config) => Schema.decodeUnknown(ConigSchema)(config)),
        Effect.flatMap((config) =>
          pipe(
            Effect.all([
              fetchRegistryItems({ ids: ['__init', accentColor, grayColor] }).pipe(
                Effect.flatMap((items) => Effect.all(items.map(install))),
              ),
              updatePandaConfig({ extension: borderRadius }),
            ]),
            Effect.provide(Layer.effect(Config, Effect.succeed(config))),
          ),
        ),
      ),
    ),
    Effect.tap(() => p.outro(`Park UI has been initialized successfully! 🎉`)),
    Effect.catchAll(() =>
      Effect.sync(() => {
        p.log.error('An error occurred while initializing Park UI.')
        p.outro(
          `You can report this issue at: ${color.underline(color.cyan('https://github.com/cschroeter/park-ui/issues'))}`,
        )
      }),
    ),
  )

  await Effect.runPromise(withTSConfig(withPandaConfig(program)))
})
