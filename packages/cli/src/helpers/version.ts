import { readPackageUpSync } from 'read-package-up'

export const getVersion = (): string => {
  const result = readPackageUpSync()
  if (result && result.packageJson && result.packageJson.version) {
    return result.packageJson.version
  }
  return 'unknown'
}
