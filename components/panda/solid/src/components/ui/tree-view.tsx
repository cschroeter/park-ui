import { TreeView as ArkTreeView, type Assign, type TreeViewRootProps } from '@ark-ui/solid'
import { For, Show, splitProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { treeView } from 'styled-system/recipes'
import type { JsxStyleProps } from 'styled-system/types'

interface Child {
  value: string
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
    <Show
      when={child.children}
      fallback={
        <ArkTreeView.Item value={child.value} class={styles.item}>
          <ArkTreeView.ItemText class={styles.itemText}>{child.name}</ArkTreeView.ItemText>
        </ArkTreeView.Item>
      }
    >
      <ArkTreeView.Branch value={child.value} class={styles.branch}>
        <ArkTreeView.BranchControl class={styles.branchControl}>
          <ArkTreeView.BranchIndicator class={styles.branchIndicator}>
            <ChevronRightIcon />
          </ArkTreeView.BranchIndicator>
          <ArkTreeView.BranchText class={styles.branchText}>{child.name}</ArkTreeView.BranchText>
        </ArkTreeView.BranchControl>
        <ArkTreeView.BranchContent class={styles.branchContent}>
          <For each={child.children}>{(child) => renderChild(child)}</For>
        </ArkTreeView.BranchContent>
      </ArkTreeView.Branch>
    </Show>
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
