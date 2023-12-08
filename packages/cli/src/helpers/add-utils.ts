import { getImportAliases } from '../config/park-ui-config'
import { downloadUtils } from './park-api'
import { saveToFile } from './save-file'

export const addUtils = async () => {
  const { utilsImportAlias } = getImportAliases()

  const utils = await downloadUtils()
  utils.forEach(({ filename, content }) => {
    saveToFile(utilsImportAlias, filename, content)
  })
}
