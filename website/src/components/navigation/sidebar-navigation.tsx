import { Collapsible } from '@ark-ui/react/collapsible'
import { ChevronRightIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Badge, Icon } from '~/components/ui'
import { sidebarRecipe } from './sidebar-recipe'
import type { TransitionBeforeSwapEvent } from 'astro:transitions/client'

interface Item {
  id: string
  name: string
  label?: string
  href?: string
  items?: Item[]
}

export interface SidebarNavigationProps {
  items: Item[]
  pathname: string
}

const styles = sidebarRecipe()

export const SidebarNavigation = (props: SidebarNavigationProps) => {
  const { items, pathname } = props
  const [currentPath, setCurrentPath] = useState<string>(pathname)
  const [expandedIds, setExpandedIds] = useState<string[]>([
    ['code', 'kbd', 'heading', 'link', 'text'].includes(pathname.split('/').pop() ?? '')
      ? 'typography'
      : pathname.split('/').filter(Boolean)[2],
  ])

  useEffect(() => {
    document.addEventListener('astro:before-swap', (e: TransitionBeforeSwapEvent) => {
      setCurrentPath(e.to.pathname)
    })
  }, [])

  const renderItem = (item: Item, depth = 1) => {
    if (item.items) {
      return (
        <li key={item.name}>
          <Collapsible.Root open={expandedIds.some((id) => id === item.id)}>
            <Collapsible.Trigger
              onClick={() =>
                setExpandedIds((ids) =>
                  ids.includes(item.id) ? ids.filter((id) => id !== item.id) : [...ids, item.id],
                )
              }
              className={styles.header}
              data-depth={depth}
              // @ts-expect-error
              style={{ '--depth': depth }}
            >
              <Icon
                size="sm"
                className={styles.indicator}
                data-state={expandedIds.includes(item.id) ? 'open' : 'closed'}
              >
                <ChevronRightIcon />
              </Icon>
              <span>{item.name}</span>
            </Collapsible.Trigger>
            <Collapsible.Content className={styles.content}>
              <ul key={item.id} data-depth={depth} className={styles.list}>
                {item.items.map((i) => renderItem(i, depth + 1))}
              </ul>
            </Collapsible.Content>
          </Collapsible.Root>
        </li>
      )
    }
    return (
      <li key={item.name} className={styles.item}>
        <a
          href={item.href}
          className={styles.link}
          aria-current={item.href === currentPath ? 'page' : undefined}
          // @ts-expect-error
          style={{ '--depth': depth }}
        >
          {item.name}
          {item.label && (
            <Badge size="sm" variant="solid" colorPalette="accent">
              {item.label}
            </Badge>
          )}
        </a>
      </li>
    )
  }

  return (
    <aside>
      <nav>
        <ul className={styles.root}>{items.map((item) => renderItem(item))}</ul>
      </nav>
    </aside>
  )
}
