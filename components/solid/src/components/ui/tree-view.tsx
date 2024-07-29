import { For, Show, splitProps } from 'solid-js'
import * as ArkTreeView from './primitives/tree-view'

interface Child {
  value: string
  name: string
  children?: Child[]
}

export interface TreeViewData {
  label: string
  children: Child[]
}

export interface TreeViewProps extends ArkTreeView.RootProps {
  data: TreeViewData
}
export const TreeView = (props: TreeViewProps) => {
  const [localProps, rootProps] = splitProps(props, ['data'])

  const renderChild = (child: Child) => (
    <Show
      when={child.children}
      fallback={
        <ArkTreeView.Item value={child.value}>
          <ArkTreeView.ItemText>{child.name}</ArkTreeView.ItemText>
        </ArkTreeView.Item>
      }
    >
      <ArkTreeView.Branch value={child.value}>
        <ArkTreeView.BranchControl>
          <ArkTreeView.BranchIndicator>
            <ChevronRightIcon />
          </ArkTreeView.BranchIndicator>
          <ArkTreeView.BranchText>{child.name}</ArkTreeView.BranchText>
        </ArkTreeView.BranchControl>
        <ArkTreeView.BranchContent>
          <For each={child.children}>{(child) => renderChild(child)}</For>
        </ArkTreeView.BranchContent>
      </ArkTreeView.Branch>
    </Show>
  )

  return (
    <ArkTreeView.Root aria-label={localProps.data.label} {...rootProps}>
      <ArkTreeView.Tree>
        <For each={localProps.data.children}>{(child) => renderChild(child)}</For>
      </ArkTreeView.Tree>
    </ArkTreeView.Root>
  )
}

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Right Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
)
