import { ark } from '@ark-ui/react/factory'
import { type ComponentProps, type ReactNode, forwardRef, useState } from 'react'
import { css, cx } from 'styled-system/css'
import { splitCssProps, styled } from 'styled-system/jsx'
import { type BreadcrumbVariantProps, breadcrumb } from 'styled-system/recipes'
import type { Assign, JsxStyleProps } from 'styled-system/types'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(breadcrumb)

const Root = withProvider(styled(ark.nav), 'root')
const List = withContext(styled(ark.ul), 'list')
const Item = withContext(styled(ark.li), 'item')
const Link = withContext(styled(ark.a), 'link')
const Separator = withContext(styled(ark.span), 'separator')

export interface BreadcrumbProps
  extends Assign<JsxStyleProps, ComponentProps<typeof Root>>,
    BreadcrumbVariantProps {
  items: Array<{ href: string; title: string | ReactNode }>
  separator?: string | ReactNode
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>((props, ref) => {
  const [variantProps, breadcrumbProps] = breadcrumb.splitVariantProps(props)
  const [cssProps, localProps] = splitCssProps(breadcrumbProps)
  const { items, className, separator, ...rootProps } = localProps
  const styles = breadcrumb(variantProps)

  return (
    <Root className={cx(styles.root, css(cssProps), className)} ref={ref} {...rootProps}>
      <List>
        {items.map((item, i) => (
          <Item key={i}>
            <Link href={item.href} className={i === items.length - 1 ? 'active' : ''}>
              {item.title}
            </Link>
            {i < items.length - 1 && <Separator>{separator ? separator : '/'}</Separator>}
          </Item>
        ))}
      </List>
    </Root>
  )
})

Breadcrumb.displayName = 'Breadcrumb'
