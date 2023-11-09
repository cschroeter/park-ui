import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { initCommand } from './commands/init'
import { getVersion } from './commands/version'

const main = async () => {
  yargs(hideBin(process.argv))
    .command('init', 'Initialize a new Park UI project', initCommand)
    .example('$0 init', 'Initialize a new Park UI project')
    .describe('init', 'Initialize a new Park UI project')
    .version(`Park UI CLI version ${await getVersion()}`)
    .demandCommand(1)
    .strictCommands().argv
}
main()
