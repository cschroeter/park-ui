import { Command } from 'commander'
import { Console, Effect } from 'effect'
import { Config, withConfig } from '~/utils/config'
import { withPandaConfig } from '~/utils/panda-config'

export const debug = new Command('debug').description('For debug purposes').action(async () => {
  const program = Config.pipe(Effect.flatMap(Console.log))

  await Effect.runPromise(withPandaConfig(withConfig(program)))
})
