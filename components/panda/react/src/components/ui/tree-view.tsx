import { TreeView } from '@ark-ui/react/tree-view'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { treeView } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(treeView)

export const Root = withProvider(styled(TreeView.Root), 'root')
export const Branch = withContext(styled(TreeView.Branch), 'branch')
export const BranchContent = withContext(styled(TreeView.BranchContent), 'branchContent')
export const BranchControl = withContext(styled(TreeView.BranchControl), 'branchControl')
export const BranchIndicator = withContext(styled(TreeView.BranchIndicator), 'branchIndicator')
export const BranchText = withContext(styled(TreeView.BranchText), 'branchText')
export const BranchTrigger = withContext(styled(TreeView.BranchTrigger), 'branchTrigger')
export const Item = withContext(styled(TreeView.Item), 'item')
export const ItemIndicator = withContext(styled(TreeView.ItemIndicator), 'itemIndicator')
export const ItemText = withContext(styled(TreeView.ItemText), 'itemText')
export const Label = withContext(styled(TreeView.Label), 'label')
export const Tree = withContext(styled(TreeView.Tree), 'tree')

export interface RootProps extends ComponentProps<typeof Root> {}
export interface BranchProps extends ComponentProps<typeof Branch> {}
export interface BranchContentProps extends ComponentProps<typeof BranchContent> {}
export interface BranchControlProps extends ComponentProps<typeof BranchControl> {}
export interface BranchIndicatorProps extends ComponentProps<typeof BranchIndicator> {}
export interface BranchTextProps extends ComponentProps<typeof BranchText> {}
export interface BranchTriggerProps extends ComponentProps<typeof BranchTrigger> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface ItemIndicatorProps extends ComponentProps<typeof ItemIndicator> {}
export interface ItemTextProps extends ComponentProps<typeof ItemText> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
export interface TreeProps extends ComponentProps<typeof Tree> {}
