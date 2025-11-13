import { Breadcrumb } from '@/components/ui'

export const App = () => {
  return (
    <Breadcrumb.Root variant="underline">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Link href="#" aria-current="page">
          Breadmcrumbs
        </Breadcrumb.Link>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
