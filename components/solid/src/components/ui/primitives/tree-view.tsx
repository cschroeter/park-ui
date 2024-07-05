import { TreeView, type Assign } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { type TreeViewVariantProps, treeView } from 'styled-system/recipes'
import type { HTMLStyledProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(treeView)

export type RootProviderProps = ComponentProps<typeof RootProvider>
export const RootProvider = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TreeView.RootProviderProps>, TreeViewVariantProps>
>(TreeView.RootProvider, 'root')

export type RootProps = ComponentProps<typeof Root>
export const Root = withProvider<
  Assign<Assign<HTMLStyledProps<'div'>, TreeView.RootProps>, TreeViewVariantProps>
>(TreeView.Root, 'root')

export const BranchContent = withContext<
  Assign<HTMLStyledProps<'ul'>, TreeView.BranchContentProps>
>(TreeView.BranchContent, 'branchContent')

export const BranchControl = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchControlProps>
>(TreeView.BranchControl, 'branchControl')

export const BranchIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchIndicatorProps>
>(TreeView.BranchIndicator, 'branchIndicator')

export const Branch = withContext<Assign<HTMLStyledProps<'li'>, TreeView.BranchProps>>(
  TreeView.Branch,
  'branch',
)

export const BranchText = withContext<Assign<HTMLStyledProps<'span'>, TreeView.BranchTextProps>>(
  TreeView.BranchText,
  'branchText',
)

export const BranchTrigger = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.BranchTriggerProps>
>(TreeView.BranchTrigger, 'branchTrigger')

export const ItemIndicator = withContext<
  Assign<HTMLStyledProps<'div'>, TreeView.ItemIndicatorProps>
>(TreeView.ItemIndicator, 'itemIndicator')

export const Item = withContext<Assign<HTMLStyledProps<'li'>, TreeView.ItemProps>>(
  TreeView.Item,
  'item',
)

export const ItemText = withContext<Assign<HTMLStyledProps<'span'>, TreeView.ItemTextProps>>(
  TreeView.ItemText,
  'itemText',
)

export const Label = withContext<Assign<HTMLStyledProps<'label'>, TreeView.LabelProps>>(
  TreeView.Label,
  'label',
)

export const Tree = withContext<Assign<HTMLStyledProps<'ul'>, TreeView.TreeProps>>(
  TreeView.Tree,
  'tree',
)

export { TreeViewContext as Context } from '@ark-ui/solid'
