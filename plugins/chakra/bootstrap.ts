import { createPreset } from '@park-ui/panda-preset'
import Handlebars from 'handlebars'
import fs from 'node:fs'
import path from 'node:path'
import prettier from 'prettier'
import v from 'voca'

Handlebars.registerHelper('json', function (context) {
  return JSON.stringify(context)
})

Handlebars.registerHelper('pascalCase', function (context) {
  return pascalCase(context)
})

const indexTemplate = Handlebars.compile(fs.readFileSync(`./src/templates/index.hbs`, 'utf-8'))
const recipeTemplate = Handlebars.compile(fs.readFileSync(`./src/templates/recipe.hbs`, 'utf-8'))
const slotRecipeTemplate = Handlebars.compile(
  fs.readFileSync(`./src/templates/slot-recipe.hbs`, 'utf-8'),
)

const pascalCase = (s: string) => v.chain(s).camelCase().capitalize().value().trim()

const generateIndex = async () => {
  const prettierConfig = await prettier.resolveConfig('.')

  const preset = createPreset()

  const slotRecipes = preset.theme?.extend?.slotRecipes ?? {}
  const recipes = preset.theme?.extend?.recipes ?? {}

  const items = Object.keys({ ...recipes, ...slotRecipes })
    .sort()
    .map((key) => {
      return {
        name: pascalCase(key),
        importName: v.kebabCase(key),
      }
    })

  const templateString = indexTemplate({ recipes: items })

  const code = await prettier.format(templateString, {
    ...prettierConfig,
    plugins: ['prettier-plugin-organize-imports'],
    parser: 'typescript',
  })

  fs.writeFileSync(path.join(`src/theme/components/index.ts`), code)
}

const generateRecipes = async () => {
  const prettierConfig = await prettier.resolveConfig('.')

  const preset = createPreset()
  const slotRecipes = preset.theme?.extend?.recipes ?? {}

  Object.entries(slotRecipes).forEach(async ([key, recipe]) => {
    const templateString = recipeTemplate(recipe)
    const code = await prettier.format(templateString, {
      ...prettierConfig,
      plugins: ['prettier-plugin-organize-imports'],
      parser: 'typescript',
    })

    fs.writeFileSync(path.join(`src/theme/components/${v.kebabCase(key)}.ts`), code)
  })
}

const generateSlotRecipes = async () => {
  const prettierConfig = await prettier.resolveConfig('.')

  const preset = createPreset()
  const slotRecipes = preset.theme?.extend?.slotRecipes ?? {}

  Object.entries(slotRecipes).forEach(async ([key, recipe]) => {
    const templateString = slotRecipeTemplate(recipe)
    const code = await prettier.format(templateString, {
      ...prettierConfig,
      plugins: ['prettier-plugin-organize-imports'],
      parser: 'typescript',
    })

    fs.writeFileSync(path.join(`src/theme/components/${v.kebabCase(key)}.ts`), code)
  })
}

const main = async () => {
  await generateIndex()
  await generateRecipes()
  await generateSlotRecipes()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
