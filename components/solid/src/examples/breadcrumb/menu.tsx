import { EllipsisIcon } from 'lucide-solid'
import { For } from 'solid-js'
import { Portal } from 'solid-js/web'
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
          />
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}

interface BreadcrumbMenuItemProps {
  items: Array<{ label: string; value: string }>
}

const BreadcrumbMenu = (props: BreadcrumbMenuItemProps) => {
  return (
    <Menu.Root size="sm">
      <Menu.Trigger
        asChild={(triggerProps) => (
          <IconButton size="xs" variant="plain" h="1lh" colorPalette="gray" {...triggerProps()}>
            <EllipsisIcon />
          </IconButton>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <For each={props.items}>
              {(item) => <Menu.Item value={item.value}>{item.label}</Menu.Item>}
            </For>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
