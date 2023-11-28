#!/usr/bin/env node

import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { addComponentsCommand } from './commands/add'
import { initCommand } from './commands/init'
import { getVersion, getVersions, showUpgradeNoteWhenNeeded } from './helpers/version'

const main = async () => {
  const versions = getVersions()
  await yargs(hideBin(process.argv))
    .scriptName('park-ui')
    .command('init', 'Initialize a new Park UI project', initCommand)
    .command('add', 'Add a new component', addComponentsCommand)
    .example('$0 init', 'Initialize a new Park UI project')
    .example('$0 add button accordion', 'Add accordion component')
    .example('$0 add --all', 'Add all available components')
    .describe('init', 'Initialize a new Park UI project')
    .version(getVersion())
    .demandCommand(1).argv

  await versions.then(showUpgradeNoteWhenNeeded)
}
main()
