import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { initCommand } from './commands/init'

const main = async () => {
  yargs(hideBin(process.argv))
    .command('init', 'Initialize a new Park UI project', initCommand)
    .demandCommand(1)
    .strictCommands().argv
}
main()
