import { Command } from 'commander'

export const init = new Command('init')
  .description('')
  .option('-w, --watch', 'Watch for changes')
  .action((options) => {
    console.log('Building...')
    if (options.watch) console.log('Watching for changes...')
  })
