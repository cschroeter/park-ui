import { readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import postcss from 'postcss'
import postcssJs from 'postcss-js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const cssInJs = readStylesToCssInJs()
const cssInJsWithoutLayers = getPandaLayerContent(cssInJs)
writeFormattedStylesJson(cssInJsWithoutLayers)

function writeFormattedStylesJson(cssInJs: Record<string, unknown>) {
  writeFileSync(`${__dirname}/css/styles.json`, JSON.stringify(cssInJs, null, 2))
}

function readStylesToCssInJs() {
  const css = readFileSync(`${__dirname}/css/styles.css`).toString()

  const root = postcss.parse(css)
  // @ts-expect-error postcssJs is not typed
  const cssInJs = postcssJs.objectify(root)
  return cssInJs
}

/**
 * The panda theme has a lot of layers that we don't need in the plugin.
 * They also cause problems with the tailwind setup.
 */

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function getPandaLayerContent(cssInJs: any) {
  return {
    ...cssInJs['@layer base'],
    ...cssInJs['@layer tokens'],
    ...cssInJs['@layer recipes']['@layer _base'],
    ...cssInJs['@layer recipes'],
    ...cssInJs['@layer recipes.slots']['@layer _base'],
    ...cssInJs['@layer recipes.slots'],
    ...cssInJs['@layer utilities']['@layer compositions'],
    ...cssInJs['@layer utilities'],
  }
}
