const { readFileSync, writeFileSync } = require('fs')
const postcss = require('postcss')
const postcssJs = require('postcss-js')

const cssInJs = readStylesToCssInJs()
writeFormattedStylesJson(cssInJs)

function writeFormattedStylesJson(cssInJs) {
  writeFileSync('./src/plugin/css/styles.json', JSON.stringify(cssInJs, null, 2))
}

function readStylesToCssInJs() {
  const css = readFileSync('./src/plugin/css/styles.css').toString()
  const root = postcss.parse(css)
  const cssInJs = postcssJs.objectify(root)
  return cssInJs
}
