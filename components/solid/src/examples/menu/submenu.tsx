import { ChevronRightIcon } from 'lucide-solid'
import { Portal } from 'solid-js/web'
import { Button, Menu } from '@/components/ui'

export const App = () => {
  return (
    <Menu.Root>
      <Menu.Trigger
        asChild={(triggerProps) => (
          <Button variant="outline" colorPalette="gray" {...triggerProps()}>
            Tools
            <Menu.Indicator />
          </Button>
        )}
      />
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="find-files">Find Files</Menu.Item>
            <Menu.Item value="search-replace">Search & Replace</Menu.Item>
            <Menu.Item value="compare-files">Compare Files</Menu.Item>
            <Menu.Root>
              <Menu.TriggerItem justifyContent="space-between">
                Git
                <ChevronRightIcon />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="git-status">Status</Menu.Item>
                    <Menu.Item value="git-commit">Commit Changes</Menu.Item>
                    <Menu.Item value="git-history">View History</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Item value="terminal">Open Terminal</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
