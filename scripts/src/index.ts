import { Command } from 'commander'
import { componentsJsonCmd } from './commands/components-json'
import { command as generateComponents } from './commands/generate-components'

import { registryCmd } from './commands/registry'

const program = new Command()

program
  .name('park')
  .version('1.0.0')
  .addCommand(componentsJsonCmd)
  .addCommand(generateComponents)
  .addCommand(registryCmd)
  .parse()
