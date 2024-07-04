import { Command } from '@effect/cli'
import { NodeContext, NodeRuntime } from '@effect/platform-node'
import { Effect } from 'effect'
import pkgJson from '../package.json'
import { components } from './commands/components'
import { compositions } from './commands/compositions'

const main = Command.make('park').pipe(Command.withSubcommands([components, compositions]))

const cli = Command.run(main, {
  name: 'Park UI',
  version: pkgJson.version,
})

cli(process.argv).pipe(Effect.provide(NodeContext.layer), NodeRuntime.runMain)
