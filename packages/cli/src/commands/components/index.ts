import { Command } from '@effect/cli'
import { add } from './add'
import { list } from './list'

export const components = Command.make('components').pipe(Command.withSubcommands([add, list]))
