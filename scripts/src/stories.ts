import fs from 'node:fs'
import path from 'node:path'
import { findUpSync } from 'find-up'
import { globby } from 'globby'
import { parse } from './helpers/panda-to-tailwind'

const rootDir = path.dirname(findUpSync('bun.lockb') ?? '')

const main = async () => {
  const components = await globby([
    path.join(rootDir, '/components/panda/react/src/**/*stories.tsx'),
  ])

  components.map((component) => {
    const content = fs.readFileSync(component, 'utf-8')
    const code = parse(content)
    return fs.writeFileSync(
      path.join(rootDir, '/components/panda/solid/src/stories/', path.basename(component)),
      code,
    )
  })
}

main()
