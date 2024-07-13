export const toPascalCase = (str = '') =>
  str
    .replace(/-./g, (match) => match.charAt(1).toUpperCase())
    .replace(/^-/, '')
    .replace(/^./, (match) => match.toUpperCase())

export const toTitleCase = (str = '') => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

export const capitalize = (str = '') => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
