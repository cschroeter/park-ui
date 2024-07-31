'use client'
import { forwardRef } from 'react'
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

export const TreeView = forwardRef<HTMLDivElement, TreeViewProps>((props, ref) => {
  const { data, ...rootProps } = props

  const renderChild = (child: Child) => (
    <StyledTreeView.Branch key={child.value} value={child.value}>
      <StyledTreeView.BranchControl>
        <StyledTreeView.BranchIndicator>
          <ChevronRightIcon />
        </StyledTreeView.BranchIndicator>
        <StyledTreeView.BranchText>{child.name}</StyledTreeView.BranchText>
      </StyledTreeView.BranchControl>
      <StyledTreeView.BranchContent>
        {child.children?.map((child) =>
          child.children ? (
            renderChild(child)
          ) : (
            <StyledTreeView.Item key={child.value} value={child.value}>
              <StyledTreeView.ItemText>{child.name}</StyledTreeView.ItemText>
            </StyledTreeView.Item>
          ),
        )}
      </StyledTreeView.BranchContent>
    </StyledTreeView.Branch>
  )

  return (
    <StyledTreeView.Root ref={ref} aria-label={data.label} {...rootProps}>
      <StyledTreeView.Tree>{data.children.map(renderChild)}</StyledTreeView.Tree>
    </StyledTreeView.Root>
  )
})

TreeView.displayName = 'TreeView'

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>Chevron Right Icon</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m9 18l6-6l-6-6"
    />
  </svg>
)
