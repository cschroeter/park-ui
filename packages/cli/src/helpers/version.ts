import * as p from '@clack/prompts'
import fetch from 'node-fetch'
import { readPackageUpSync } from 'read-package-up'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
// the commonjs variables are not there in modules
const __dirname = dirname(__filename)

export const getVersion = (): string => {
  const cwd = __dirname
  const result = readPackageUpSync({ cwd })
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

    const responseData: any = await response.json()
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
