import { Command } from 'commander'
import { Console, Effect } from 'effect'
import { Config, withConfig } from '~/utils/config'
import { withPandaConfig } from '~/utils/panda-config'
import { withTSConfig } from '~/utils/tsconfig'

export const debug = new Command('debug').description('For debug purposes').action(async () => {
  const program = Config.pipe(Effect.flatMap(Console.log))

  await Effect.runPromise(withPandaConfig(withTSConfig(withConfig(program))))
})
