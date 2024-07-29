import fs from 'node:fs/promises'
import { globby } from 'globby'
const files = await globby('**/*.tsx')
const camelToKebab = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}
files.forEach(async (file) => {
  const content = await fs.readFile(file, 'utf8')
  const foo = content.replace(
    /import\s*\{\s*([^}]+)\s*\}\s*from\s*'~\/components\/ui'/g,
    (match, p1) => {
      return p1
        .split(',')
        .map((item) => {
          const trimmedItem = item.trim()
          const kebabItem = camelToKebab(trimmedItem)
          return `import { ${trimmedItem} } from '~/components/ui/${kebabItem}'`
        })
        .join('\n')
    },
  )
  await fs.writeFile(file, foo)
})
