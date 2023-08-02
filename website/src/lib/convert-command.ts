export type PackageManager = 'npm' | 'pnpm' | 'yarn'

interface CommandMap {
  [key: string]: {
    [key in PackageManager]?: string
  }
}

const commandMap: CommandMap = {
  install: {
    npm: 'install',
    pnpm: 'add',
    yarn: 'add',
  },
  uninstall: {
    npm: 'uninstall',
    pnpm: 'remove',
    yarn: 'remove',
  },
  // Add more commands as necessary...
}

export const convertCommand = (inputCommand: string, targetPkgManager: PackageManager) =>
  inputCommand
    .split(' ')
    .map((word) => {
      if (word === 'npm') {
        return targetPkgManager
      }
      return commandMap[word]?.[targetPkgManager] || word
    })
    .join(' ')
