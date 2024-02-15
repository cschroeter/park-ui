import { TreeView as ArkTreeView, type TreeViewRootProps } from '@ark-ui/react/tree-view'
import { ChevronRightIcon } from 'lucide-react'
import { forwardRef } from 'react'
import { css, cx } from 'styled-system/css'
import { splitCssProps } from 'styled-system/jsx'
import { treeView } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { Badge } from '~/components/ui'

interface Sitemap {
  title: string
  items: {
    title: string
    href: string
    label?: string
  }[]
}

export interface TreeViewProps extends Assign<JsxStyleProps, TreeViewRootProps> {
  data: Sitemap[]
}

export const SidebarNavigation = forwardRef<HTMLDivElement, TreeViewProps>((props, ref) => {
  const [cssProps, localProps] = splitCssProps(props)
  const { data, className, ...rootProps } = localProps
  const styles = treeView()
  return (
    <ArkTreeView.Root
      ref={ref}
      aria-label="Site navigation"
      className={cx(styles.root, css(cssProps), className)}
      expandedIds={new Set('/docs/panda/overview')}
      selectedIds={new Set('/docs/panda/overview/introduction')}
      {...rootProps}
    >
      <ArkTreeView.Tree className={styles.tree}>
        {data.map((group) => (
          <ArkTreeView.Branch key={group.title} id={group.title} className={styles.branch}>
            <ArkTreeView.BranchControl className={styles.branchControl}>
              <ArkTreeView.BranchIndicator className={styles.branchIndicator}>
                <ChevronRightIcon />
              </ArkTreeView.BranchIndicator>
              <ArkTreeView.BranchText className={styles.branchText}>
                {group.title}
              </ArkTreeView.BranchText>
            </ArkTreeView.BranchControl>
            <ArkTreeView.BranchContent className={styles.branchContent}>
              {group.items.map((item) => (
                <a href={item.href} key={item.href}>
                  <ArkTreeView.Item id={item.href} className={styles.item}>
                    <ArkTreeView.ItemText className={styles.itemText}>
                      {item.title} {item.href}
                    </ArkTreeView.ItemText>
                    {item.label && <Badge size="sm">{item.label}</Badge>}
                  </ArkTreeView.Item>
                </a>
              ))}
            </ArkTreeView.BranchContent>
          </ArkTreeView.Branch>
        ))}
      </ArkTreeView.Tree>
    </ArkTreeView.Root>
  )
})

SidebarNavigation.displayName = 'SidebarNavigation'
