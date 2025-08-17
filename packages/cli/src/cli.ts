import { Effect, pipe } from 'effect'
import { PandaConfigInvalid } from './error'
import { getPandaConfigPath, updatePandaConfig } from './panda'

const config = {
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          coral: {
            light: {
              '1': { value: '#fcfcfd' },
            },
            dark: {
              '1': { value: '#111113' },
            },
          },
        },
      },
    },
  },
}

const main = async () => {
  const programm = pipe(
    getPandaConfigPath(),
    Effect.flatMap((configPath) =>
      Effect.tryPromise({
        try: () => updatePandaConfig({ config, configPath }),
        catch: () => PandaConfigInvalid,
      }),
    ),
  )
  await Effect.runPromise(programm)
}

main()
