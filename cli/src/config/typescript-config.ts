import { tsconfigResolverSync } from 'tsconfig-resolver'

const getTsConfigPath = () => {
  const tsconfigPath = tsconfigResolverSync()

  if (!tsconfigPath.exists) {
    throw new Error('Could not find tsconfig.json')
  }

  if (!tsconfigPath.config.compilerOptions?.baseUrl) {
    throw new Error('Please configure a baseUrl in your tsconfig.json compilerOptions.')
  }

  if (!tsconfigPath.config.compilerOptions?.paths) {
    throw new Error('Please configure paths in your tsconfig.json compilerOptions.')
  }

  const baseFolder = tsconfigPath.path.replace('/tsconfig.json', '')
  return { baseFolder, tsconfigPath }
}

export const resolveTypescriptPath = (pathToResolve: string): string => {
  const { baseFolder, tsconfigPath } = getTsConfigPath()
  const paths = tsconfigPath.config.compilerOptions?.paths ?? {}

  for (const [key, value] of Object.entries(paths)) {
    const normalizedKey = key.replace('*', '')
    if (pathToResolve.startsWith(normalizedKey)) {
      const normalizedValue = value[0].replace('*', '')
      return pathToResolve
        .replace(normalizedKey, `${baseFolder}/${normalizedValue}`)
        .replaceAll('//', '')
    }
  }

  throw new Error(
    'Path resolution failed. Please make sure that there is a tsconfig.json file with baseUrl and paths configured.',
  )
}
