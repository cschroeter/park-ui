'use client'
import { CheckSquareIcon, ChevronRightIcon, FileIcon, FolderIcon } from 'lucide-react'
import { forwardRef } from 'react'
import * as StyledTreeView from './styled/tree-view'

export const TreeView = forwardRef<HTMLDivElement, StyledTreeView.RootProps>((props, ref) => {
  return (
    <StyledTreeView.Root ref={ref} {...props}>
      <StyledTreeView.Tree>
        {/* @ts-expect-error */}
        {props.collection.rootNode.children.map((node, index) => (
          <TreeNode key={node.id} node={node} indexPath={[index]} />
        ))}
      </StyledTreeView.Tree>
    </StyledTreeView.Root>
  )
})

TreeView.displayName = 'TreeView'

const TreeNode = (props: StyledTreeView.NodeProviderProps) => {
  const { node, indexPath } = props
  return (
    <StyledTreeView.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
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
            {/* @ts-expect-error */}
            {node.children.map((child, index) => (
              <TreeNode key={child.id} node={child} indexPath={[...indexPath, index]} />
            ))}
          </StyledTreeView.BranchContent>
        </StyledTreeView.Branch>
      ) : (
        <StyledTreeView.Item>
          <StyledTreeView.ItemIndicator>
            <CheckSquareIcon />
          </StyledTreeView.ItemIndicator>
          <StyledTreeView.ItemText>
            <FileIcon />
            {node.name}
          </StyledTreeView.ItemText>
        </StyledTreeView.Item>
      )}
    </StyledTreeView.NodeProvider>
  )
}
