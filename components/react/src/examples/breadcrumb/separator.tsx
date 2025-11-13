import { DotIcon } from 'lucide-react'
import { Breadcrumb } from '@/components/ui'

export const App = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>/</Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <DotIcon />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>Breadcrumbs</Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
