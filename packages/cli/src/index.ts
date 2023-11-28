#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addComponentsCommand } from './commands/add'
import { checkCommand } from './commands/check'
import { initCommand } from './commands/init'
import { getVersionCommand } from './commands/version'

const main = async () => {
  yargs(hideBin(process.argv))
    .scriptName('park-ui')
    .command('init', 'Initialize a new Park UI project', initCommand)
    .command('add', 'Add a new component', addComponentsCommand)
    .command('check', 'Update Park UI CLI to the latest version', checkCommand)
    .example('$0 init', 'Initialize a new Park UI project')
    .example('$0 add button accordion', 'Add accordion component')
    .example('$0 add --all', 'Add all available components')
    .describe('init', 'Initialize a new Park UI project')
    .version(getVersionCommand())
    .demandCommand(1).argv
}
main()
