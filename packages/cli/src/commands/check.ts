import * as p from '@clack/prompts'
import { getVersion } from '../helpers/version'

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
    console.error('Error fetching latest version:', error.message)
    throw error
  }
}

export const checkCommand = async () => {
  const currentVersion = getVersion()
  const latestVersion = await getLatestVersion()
  if (currentVersion === latestVersion) {
    p.note(`You are using the latest version of Park UI CLI: ${currentVersion}. No need to update.`)
    return
  }
  p.note(
    `Your Park UI CLI version is ${currentVersion}. The latest version is ${latestVersion}.\nRun "npm install -g @park-ui/cli" to update.`,
  )
}
