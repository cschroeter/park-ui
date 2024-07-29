'use client'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import { FolderArchiveIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'

interface Props {
  name: string
  files: { filename: string; content: string; html: string }[]
}

export const DownloadButton = (props: Props) => {
  const { name, files } = props

  const handleClick = () => {
    const zip = new JSZip()
    files.map((file) => zip.file(file.filename, file.content))
    zip.generateAsync({ type: 'blob' }).then((content) => saveAs(content, `${name}.zip`))
  }

  return (
    <Button
      display={{ base: 'none', md: 'flex' }}
      variant="ghost"
      color="gray.dark.12"
      _hover={{ bg: 'gray.dark.a3' }}
      size="xs"
      onClick={handleClick}
    >
      <FolderArchiveIcon />
      Download ZIP
    </Button>
  )
}
