import { Portal } from '@ark-ui/react/portal'
import { EllipsisIcon } from 'lucide-react'
import { Breadcrumb, IconButton, Menu } from '@/components/ui'

export const App = () => {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Docs</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="#">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <BreadcrumbMenu
            items={[
              { label: 'Overview', value: 'overview' },
              { label: 'Styling', value: 'Styling' },
              { label: 'Theming', value: 'theming' },
            ]}
          >
            <IconButton size="xs" variant="plain" h="1lh" colorPalette="gray">
              <EllipsisIcon />
            </IconButton>
          </BreadcrumbMenu>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

interface BreadcrumbMenuItemProps {
  children: React.ReactNode
  items: Array<{ label: string; value: string }>
}

const BreadcrumbMenu = (props: BreadcrumbMenuItemProps) => {
  const { children, items } = props
  return (
    <Menu.Root size="sm">
      <Menu.Trigger asChild>{children}</Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {items.map((item) => (
              <Menu.Item key={item.value} value={item.value}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
