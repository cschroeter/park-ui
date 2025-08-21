'use client'
import type { Doc } from '.velite'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'
import { sva } from 'styled-system/css'

const recipe = sva({
  slots: ['root', 'heading', 'list', 'item', 'link'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
    },
    heading: {
      fontWeight: 'medium',
      textStyle: 'sm',
      lineHeight: '1.5rem',
      textTransform: 'capitalize',
    },
    list: {
      borderStartWidth: '1px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2',
    },
    item: {
      borderStartWidth: '1px',
      color: 'fg.muted',
      fontSize: 'sm',
      display: 'flex',
      lineHeight: '1.5rem',
      ps: '4',
      ms: '-1px',
      transitionDuration: 'normal',
      transitionProperty: 'color',
      transitionTimingFunction: 'default',
      _hover: {
        color: 'fg.default',
        borderColor: 'border.outline',
      },
      _currentPage: {
        borderColor: 'border.outline',
        color: 'fg.default',
        fontWeight: 'medium',
        _hover: {
          color: 'fg.default',
        },
      },
    },
    link: {
      flex: '1',
    },
  },
})
const classNames = recipe()

interface Props {
  heading: string
  docs: Doc[]
}

export const SidebarGroup = (props: Props) => {
  const pathname = usePathname()

  const { heading, docs } = props
  return (
    <div className={classNames.root}>
      <h3 className={classNames.heading}>{heading}</h3>
      <ul className={classNames.list}>
        {docs.map((doc) => (
          <li
            key={doc.slug}
            className={classNames.item}
            aria-current={pathname === doc.href ? 'page' : undefined}
          >
            <NextLink href={doc.href} className={classNames.link}>
              {doc.title}
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
