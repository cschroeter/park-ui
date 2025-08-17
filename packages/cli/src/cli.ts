import { Effect } from 'effect'

import { getParkUIConfig } from './park-ui'

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
  // user want to install button

  // const components = ['button']

  console.clear()

  // p.intro(`${color.bgCyan(color.white(' Park UI '))}`)

  const programm = getParkUIConfig()
  await Effect.runPromise(programm)

  // const programm = updatePandaConfig(config).pipe(
  //   Effect.catchTag('PandaConfigInvalid', () => Effect.succeed(undefined)),
  //   Effect.catchTag('PandaConfigNotFound', () => Effect.succeed(undefined)),
  // )

  // spinner.stop()
}

main()
