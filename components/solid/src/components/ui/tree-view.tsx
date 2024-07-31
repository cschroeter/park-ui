import { For, Show, splitProps } from 'solid-js'
import * as StyledTreeView from './styled/tree-view'

interface Child {
  value: string
  name: string
  children?: Child[]
}

export interface TreeViewData {
  label: string
  children: Child[]
}

export interface TreeViewProps extends StyledTreeView.RootProps {
  data: TreeViewData
}
export const TreeView = (props: TreeViewProps) => {
  const [localProps, rootProps] = splitProps(props, ['data'])

  const renderChild = (child: Child) => (
    <Show
      when={child.children}
      fallback={
        <StyledTreeView.Item value={child.value}>
          <StyledTreeView.ItemText>{child.name}</StyledTreeView.ItemText>
        </StyledTreeView.Item>
      }
    >
      <StyledTreeView.Branch value={child.value}>
        <StyledTreeView.BranchControl>
          <StyledTreeView.BranchIndicator>
            <ChevronRightIcon />
          </StyledTreeView.BranchIndicator>
          <StyledTreeView.BranchText>{child.name}</StyledTreeView.BranchText>
        </StyledTreeView.BranchControl>
        <StyledTreeView.BranchContent>
          <For each={child.children}>{(child) => renderChild(child)}</For>
        </StyledTreeView.BranchContent>
      </StyledTreeView.Branch>
    </Show>
  )

  return (
    <StyledTreeView.Root aria-label={localProps.data.label} {...rootProps}>
      <StyledTreeView.Tree>
        <For each={localProps.data.children}>{(child) => renderChild(child)}</For>
      </StyledTreeView.Tree>
    </StyledTreeView.Root>
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
