#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addComponentsCommand } from './commands/add'
import { initCommand } from './commands/init'
import { getVersion } from './commands/version'

const main = async () => {
  yargs(hideBin(process.argv))
    .command('init', 'Initialize a new Park UI project', initCommand)
    .command('add', 'Add a new component', addComponentsCommand)
    .example('$0 init', 'Initialize a new Park UI project')
    .example('$0 add button accordion', 'Add accordion component')
    .describe('init', 'Initialize a new Park UI project')
    .version(`Park UI CLI version ${await getVersion()}`)
    .demandCommand(1).argv
}
main()
