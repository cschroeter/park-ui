#!/usr/bin/env bun
import { Command } from 'commander'
import packageJson from '../package.json'
import { add } from './commands/add'
import { init } from './commands/init'
import { registry } from './commands/registry'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const program = new Command()
    .name('Park UI')
    .description('Build your own Design System')
    .version(packageJson.version || '1.0.0', '-v, --version', 'display the version number')

  program.addCommand(init).addCommand(add).addCommand(registry)

  program.parse()
}

main()
