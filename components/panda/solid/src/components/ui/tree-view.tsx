import { TreeView as ArkTreeView, type TreeViewRootProps } from '@ark-ui/solid'
import { ChevronRightIcon } from 'lucide-solid'
import { For, Show, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { treeView } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'

interface Child {
  id: string
  name: string
  children?: Child[]
}

export interface TreeViewData {
  label: string
  children: Child[]
}

export interface TreeViewProps extends Assign<JsxStyleProps, TreeViewRootProps> {
  data: TreeViewData
}

export const TreeView = (props: TreeViewProps) => {
  const [cssProps, treeViewProps] = splitCssProps(props)
  const [localProps, rootProps] = splitProps(treeViewProps, ['data', 'class'])
  const styles = treeView()

  const renderChild = (child: Child) => (
    <ArkTreeView.Branch id={child.id} class={styles.branch}>
      <ArkTreeView.BranchControl class={styles.branchControl}>
        <ArkTreeView.BranchIndicator class={styles.branchIndicator}>
          <ChevronRightIcon />
        </ArkTreeView.BranchIndicator>
        <ArkTreeView.BranchText class={styles.branchText}>{child.name}</ArkTreeView.BranchText>
      </ArkTreeView.BranchControl>
      <ArkTreeView.BranchContent class={styles.branchContent}>
        <Show
          when={child.children}
          fallback={
            <ArkTreeView.Item id={child.id} class={styles.item}>
              <ArkTreeView.ItemText class={styles.itemText}>{child.name}</ArkTreeView.ItemText>
            </ArkTreeView.Item>
          }
        >
          <For each={child.children}>{(child) => renderChild(child)}</For>
        </Show>
      </ArkTreeView.BranchContent>
    </ArkTreeView.Branch>
  )

  return (
    <ArkTreeView.Root
      aria-label={localProps.data.label}
      class={cx(styles.root, css(cssProps), localProps.class)}
      {...rootProps}
    >
      <ArkTreeView.Tree class={styles.tree}>
        <For each={localProps.data.children}>{(child) => renderChild(child)}</For>
      </ArkTreeView.Tree>
    </ArkTreeView.Root>
  )
}
