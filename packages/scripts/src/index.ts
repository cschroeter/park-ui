#!/usr/bin/env bun
import { Command } from 'commander'
import { registry } from './commands/registry'
import { typedoc } from './commands/typedoc'

process.on('SIGINT', () => process.exit(0))
process.on('SIGTERM', () => process.exit(0))

async function main() {
  const program = new Command().name('Park UI / Scripts')

  program.addCommand(registry).addCommand(typedoc).parse()
}

main()
