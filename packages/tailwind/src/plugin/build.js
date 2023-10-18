const { readFileSync, writeFileSync } = require('fs')
const postcss = require('postcss')
const postcssJs = require('postcss-js')

const cssInJs = readStylesToCssInJs()
const cssInJsWithoutLayers = removePandaLayers(cssInJs)
writeFormattedStylesJson(cssInJsWithoutLayers)

function writeFormattedStylesJson(cssInJs) {
  writeFileSync('./src/plugin/css/styles.json', JSON.stringify(cssInJs, null, 2))
}

function readStylesToCssInJs() {
  const css = readFileSync('./src/plugin/css/styles.css').toString()

  // TODO remove layers

  const root = postcss.parse(css)
  const cssInJs = postcssJs.objectify(root)
  return cssInJs
}

/**
 * The panda theme has a lot of layers that we don't need in the plugin.
 * They also cause problems with the tailwind setup.
 */
function removePandaLayers(cssInJs) {
  const layers = ['base', 'utilities', 'recipes.slots', 'recipes', 'tokens']
  return layers.reduce((result, layer) => {
    const styles = cssInJs[`@layer ${layer}`]
    return styles ? { ...result, ...styles } : result
  }, {})
}
