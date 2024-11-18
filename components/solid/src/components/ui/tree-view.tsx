import { CheckSquareIcon, ChevronRightIcon, FileIcon, FolderIcon } from 'lucide-solid'
import { For, Show } from 'solid-js'
import * as StyledTreeView from './styled/tree-view'

export const TreeView = (props: StyledTreeView.RootProps) => {
  return (
    <StyledTreeView.Root {...props}>
      <StyledTreeView.Tree>
        <For each={props.collection.rootNode.children}>
          {(node, index) => <TreeNode node={node} indexPath={[index()]} />}
        </For>
      </StyledTreeView.Tree>
    </StyledTreeView.Root>
  )
}

const TreeNode = (props: StyledTreeView.NodeProviderProps) => {
  const { node, indexPath } = props
  return (
    <StyledTreeView.NodeProvider node={node} indexPath={indexPath}>
      <Show
        when={node.children}
        fallback={
          <StyledTreeView.Item>
            <StyledTreeView.ItemIndicator>
              <CheckSquareIcon />
            </StyledTreeView.ItemIndicator>
            <StyledTreeView.ItemText>
              <FileIcon />
              {node.name}
            </StyledTreeView.ItemText>
          </StyledTreeView.Item>
        }
      >
        <StyledTreeView.Branch>
          <StyledTreeView.BranchControl>
            <StyledTreeView.BranchText>
              <FolderIcon /> {node.name}
            </StyledTreeView.BranchText>
            <StyledTreeView.BranchIndicator>
              <ChevronRightIcon />
            </StyledTreeView.BranchIndicator>
          </StyledTreeView.BranchControl>
          <StyledTreeView.BranchContent>
            <StyledTreeView.BranchIndentGuide />
            <For each={node.children}>
              {(child, index) => <TreeNode node={child} indexPath={[...indexPath, index()]} />}
            </For>
          </StyledTreeView.BranchContent>
        </StyledTreeView.Branch>
      </Show>
    </StyledTreeView.NodeProvider>
  )
}
