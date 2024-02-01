import { TreeView } from '@ark-ui/react/tree-view'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { treeView } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(treeView)

export const Root = withProvider(styled(TreeView.Root), 'root')
export const Item = withContext(styled(TreeView.Item), 'item')
export const Tree = withContext(styled(TreeView.Tree), 'tree')
export const Label = withContext(styled(TreeView.Label), 'label')
export const Branch = withContext(styled(TreeView.Branch), 'branch')
export const BranchControl = withContext(styled(TreeView.BranchControl), 'branchControl')
export const BranchContent = withContext(styled(TreeView.BranchContent), 'branchContent')
export const BranchText = withContext(styled(TreeView.BranchText), 'branchText')

export interface RootProps extends ComponentProps<typeof Root> {}
export interface ItemProps extends ComponentProps<typeof Item> {}
export interface TreeProps extends ComponentProps<typeof Tree> {}
export interface LabelProps extends ComponentProps<typeof Label> {}
export interface BranchProps extends ComponentProps<typeof Branch> {}
export interface BranchControlProps extends ComponentProps<typeof BranchControl> {}
export interface BranchContentProps extends ComponentProps<typeof BranchContent> {}
export interface BranchTextProps extends ComponentProps<typeof BranchText> {}
