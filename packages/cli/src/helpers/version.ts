import * as p from '@clack/prompts'
import { readPackageUpSync } from 'read-package-up'

export const getVersion = (): string => {
  const result = readPackageUpSync()
  if (result && result.packageJson && result.packageJson.version) {
    return result.packageJson.version
  }
  return 'unknown'
}

async function getLatestVersion(): Promise<string> {
  try {
    const response = await fetch('https://registry.npmjs.org/@park-ui/cli/latest')

    if (!response.ok) {
      throw new Error(`Failed to fetch latest version. Status: ${response.status}`)
    }

    const responseData = await response.json()
    const latestVersion = responseData.version

    return latestVersion
  } catch (error: any) {
    throw error
  }
}

export const getVersions = async () => {
  const currentVersion = getVersion()
  const latestVersion = await getLatestVersion().catch(() => undefined)
  return {
    currentVersion,
    latestVersion,
  }
}

export const showUpgradeNoteWhenNeeded = async (options: {
  currentVersion: string
  latestVersion: string | undefined
}) => {
  const { currentVersion, latestVersion } = options
  if (!latestVersion) {
    return
  }

  if (currentVersion !== latestVersion) {
    p.note(
      `Your Park UI CLI version is ${currentVersion}. The latest version is ${latestVersion}.\nRun "npm install -g @park-ui/cli" to update.`,
    )
  }
}
