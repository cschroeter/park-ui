import { readPackageUp } from 'read-package-up'

export const getVersion = async (): Promise<string> => {
  const result = await readPackageUp()
  if (result && result.packageJson && result.packageJson.version) {
    return result.packageJson.version
  }
  return 'is unknown'
}
