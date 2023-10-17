import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { supportedClassNames } from '../supported-components'

const main = async () => {
  const { demoFiles, demoDir } = getDemoFilePaths()

  demoFiles.forEach((fileName) => {
    createStoryFile({ demoDir, fileName })
  })
}

main()

function getDemoFilePaths() {
  const demoDir = join(__dirname, '../../../../../website/src/components/demos')

  const ignoredComponents = [
    'hover-card',
    'dialog', // uses style props on button and Trigger
  ]

  const demoFiles = readdirSync(demoDir)
    .filter((fileName) => !fileName.includes('index.ts'))
    .filter((fileName) => supportedClassNames.some((className) => fileName.includes(className)))
    // filter for components that are not icon-button.demo.tsx, icon-button-group.demo.tsx, tags-input.demo.tsx
    .filter((fileName) => !fileName.includes('icon-button'))
    .filter((fileName) => !fileName.includes('tags-input'))
    .filter((fileName) => !fileName.includes('icon-button-group'))
    .filter((fileName) => !fileName.includes('radio-button-group'))
    .filter(
      (fileName) => !ignoredComponents.some((componentName) => fileName.includes(componentName)),
    )

  console.log(demoFiles)
  return { demoFiles, demoDir }
}

function createStoryFile(options: { fileName: string; demoDir: string }) {
  const { fileName, demoDir } = options

  const componentName = fileName.replace('.demo.tsx', '')
  const componentPath = `../../components/${componentName}`
  mkdirSync(join(__dirname, componentPath), { recursive: true })

  const demoFile = join(demoDir, fileName)
  const componentFile = join(__dirname, `${componentPath}/${componentName}.stories.tsx`)

  const componentFileContent = readFileSync(demoFile, 'utf-8')

  const storyWithReplacements = componentFileContent
    .replaceAll("import { Icon } from '~/components/ui'", "import { Icon } from '../icon/snippet'")
    .replaceAll(
      "import { IconButton } from '~/components/ui/icon-button'",
      "import { IconButton } from '../icon-button/snippet'",
    )
    .replace(`~/components/ui/${componentName}`, './snippet')
    .replaceAll(/~\/components\/ui\/(\w+)/g, '../$1/snippet')
    .replaceAll('<Stack gap="8" p="6">', '<div className="flex flex-col gap-8 p-6">')
    .replaceAll(
      '<Stack gap="3" direction="row" width="full">',
      '<div className="flex flex-row gap-3 w-full">',
    )
    .replaceAll('<Stack gap="1.5" width="2xs">', '<div className="flex flex-col gap-1.5 w-8/12">')
    .replaceAll('<Stack gap="1.5">', '<div className="flex flex-col gap-1.5">')
    .replaceAll('<Stack gap="4" direction="row">', '<div className="flex flex-row gap-4">')
    .replaceAll('<Stack gap="4">', '<div className="flex flex-col gap-4">')
    .replaceAll('<Stack gap="6">', '<div className="flex flex-col gap-6">')
    .replaceAll('<Stack gap="1">', '<div className="flex flex-col gap-1">')
    .replaceAll('<Stack gap="3">', '<div className="flex flex-col gap-3">')
    .replaceAll('</Stack>', '</div>')

  writeFileSync(componentFile, storyWithReplacements)
}
