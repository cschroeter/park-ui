import { Command } from 'commander'
import { findUpSync } from 'find-up'
import { globby } from 'globby'
import fs from 'node:fs'
import path from 'node:path'
import { parse } from './helpers/panda-to-tailwind'

const rootDir = path.dirname(findUpSync('bun.lockb') ?? '')

const main = async () => {
  const components = await globby([
    path.join(rootDir, '/components/panda/solid/src/**/*stories.tsx'),
  ])

  components.map((component) => {
    const content = fs.readFileSync(component, 'utf-8')
    const code = parse(content)
    return fs.writeFileSync(
      path.join(rootDir, '/components/tailwind/solid/src/stories/', path.basename(component)),
      code,
    )
  })

  console.log('sync stories', rootDir)
}

export const syncStories = new Command()
  .name('stories')
  .description('Syncs the stories from React to Vue and Solid')
  .action(main)
