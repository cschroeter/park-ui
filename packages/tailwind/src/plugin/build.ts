import { readFileSync, writeFileSync } from 'fs'
import { dirname } from 'path'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const cssInJs = readStylesToCssInJs()
const cssInJsWithoutLayers = removePandaLayers(cssInJs)
writeFormattedStylesJson(cssInJsWithoutLayers)

function writeFormattedStylesJson(cssInJs) {
  writeFileSync(__dirname + '/css/styles.json', JSON.stringify(cssInJs, null, 2))
}

function readStylesToCssInJs() {
  const css = readFileSync(__dirname + '/css/styles.css').toString()

  const root = postcss.parse(css)
  const cssInJs = postcssJs.objectify(root)
  return cssInJs
}

/**
 * The panda theme has a lot of layers that we don't need in the plugin.
 * They also cause problems with the tailwind setup.
 */
function removePandaLayers(cssInJs) {
  const layers = [
    'base',
    'utilities',
    'recipes.slots',
    'recipes',
    'tokens',
    // order matters, now sub layers are removed
    '_base',
    'compositions',
  ]
  return layers.reduce((result, layer) => {
    const styles = result[`@layer ${layer}`]
    delete result[`@layer ${layer}`]
    return styles ? { ...result, ...styles } : result
  }, cssInJs)
}
