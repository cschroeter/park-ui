import { ComponentIcon, FileIcon } from 'lucide-react'
import { Breadcrumb } from '@/components/ui'

export const App = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">
            <FileIcon />
            Docs
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">
            <ComponentIcon />
            Components
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>Breadcrumbs</Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
