import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Changelog = defineDocumentType(() => ({
  name: 'Changelog',
  filePathPattern: `**/*.md`,
  contentType: 'mdx',
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Changelog],
  disableImportAliasWarning: true,
})
