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
    .replace(`~/components/ui`, './snippet')
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
    .replaceAll('<HStack gap="3">', '<div className="flex flex-row gap-3">')
    .replaceAll('<Stack gap="2" flex="1">', '<div className="flex flex-col gap-2 flex-1">')
    .replaceAll('<HStack>', '<div className="flex flex-row">')
    .replaceAll(
      '<HStack gap="6" justify="space-between" flex="1">',
      '<div className="flex flex-row gap-6 justify-between flex-1">',
    )
    .replaceAll('<Table.Head textAlign="right">', '<Table.Head className="text-right">')
    .replaceAll('<Table.Cell fontWeight="medium">', '<Table.Cell className="font-medium">')
    .replaceAll('<Table.Cell textAlign="right">', '<Table.Cell className="text-right">')
    .replaceAll('<HStack gap="2">', '<div className="flex flex-row gap-2">')
    .replaceAll(
      '<Drawer.CloseTrigger asChild position="absolute" top="3" right="4">',
      '<Drawer.CloseTrigger asChild className="absolute top-3 right-4">',
    )
    .replaceAll(
      '<RadioButtonGroup.Item key={id} value={option.value} disabled={option.disabled} px="0">',
      '<RadioButtonGroup.Item key={id} value={option.value} disabled={option.disabled} className="px-0">',
    )
    .replaceAll(
      '<Menu.TriggerItem justifyContent="space-between">',
      '<Menu.TriggerItem className="justify-between">',
    )
    .replaceAll(
      '<Input size="lg" width="0" textAlign="center" />',
      '<Input size="lg" className="text-center w-0" />',
    )
    .replaceAll('type TableProps,', '')
    .replaceAll('props: TableProps) => {', 'props) => {')
    .replaceAll(
      '<Box position="absolute" top="1" right="1">',
      '<div className="absolute top-1 right-1">',
    )
    .replaceAll('</Box>', '</div>')
    .replaceAll('</Stack>', '</div>')
    .replaceAll('</HStack>', '</div>')

  writeFileSync(componentFile, storyWithReplacements)
}
