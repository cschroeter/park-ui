import { Command } from 'commander'
import { componentsJsonCmd } from './commands/components-json'

const program = new Command()

program.name('park').version('1.0.0').addCommand(componentsJsonCmd).parse()
