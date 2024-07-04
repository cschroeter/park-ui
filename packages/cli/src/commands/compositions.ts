import { Command } from '@effect/cli'
import { Console } from 'effect'

const add = Command.make('add', {}, () => Console.log('Add a new component'))
const list = Command.make('list', {}, () => Console.log('List all compositions'))

export const compositions = Command.make('compositions').pipe(Command.withSubcommands([add, list]))
