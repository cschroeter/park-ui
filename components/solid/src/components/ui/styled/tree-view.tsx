import type { Assign } from '@ark-ui/solid'
import { type TreeNode, TreeView } from '@ark-ui/solid/tree-view'
import type { ComponentProps } from 'solid-js'
import { type TreeViewVariantProps, treeView } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from './utils/create-style-context'

const { withProvider, withContext } = createStyleContext(treeView)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<
    Assign<HTMLStyledProps<'div'>, TreeView.RootProviderBaseProps<TreeNode>>,
    TreeViewVariantProps
  >
>(TreeView.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TreeView.RootBaseProps<TreeNode>>, TreeViewVariantProps>
>(TreeView.Root, 'root')

export const BranchContent = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchContentBaseProps>
>(TreeView.BranchContent, 'branchContent')

export const BranchControl = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchControlBaseProps>
>(TreeView.BranchControl, 'branchControl')

export const BranchIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchIndicatorBaseProps>
>(TreeView.BranchIndicator, 'branchIndicator')

export const Branch = withContext<Assign<HTMLStyledProps<'div'>, TreeView.BranchBaseProps>>(
  TreeView.Branch,
  'branch',
)

export const BranchIndentGuide = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchIndentGuideBaseProps>
>(TreeView.BranchIndentGuide, 'branchIndentGuide')

export const BranchText = withContext<
  Assign<HTMLStyledProps<'span'>, TreeView.BranchTextBaseProps>
>(TreeView.BranchText, 'branchText')

export const BranchTrigger = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchTriggerBaseProps>
>(TreeView.BranchTrigger, 'branchTrigger')

export const ItemIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.ItemIndicatorBaseProps>
>(TreeView.ItemIndicator, 'itemIndicator')

export const Item = withContext<Assign<HTMLStyledProps<'div'>, TreeView.ItemBaseProps>>(
  TreeView.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, TreeView.ItemTextBaseProps>>(
  TreeView.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, TreeView.LabelBaseProps>>(
  TreeView.Label,
  'label',
)

export const Tree = withContext<Assign<HTMLStyledProps<'div'>, TreeView.TreeBaseProps>>(
  TreeView.Tree,
  'tree',
)

export type NodeProviderProps = TreeView.NodeProviderProps<TreeNode>
export const NodeProvider = TreeView.NodeProvider

export { TreeViewContext as Context } from '@ark-ui/solid'
