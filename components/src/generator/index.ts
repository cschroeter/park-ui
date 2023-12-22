import { Command } from 'commander'
import { componentsJsonCmd } from '../commands/components-json'
import { registryCmd } from '../commands/registry'

const program = new Command()

program.name('park').version('1.0.0').addCommand(componentsJsonCmd).addCommand(registryCmd).parse()
