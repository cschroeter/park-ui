'use client'

import { Tabs as ArkTabs } from '@ark-ui/react'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv({
  base: 'tabs',
  defaultVariants: { size: 'md', variant: 'line' },
  slots: {
    root: 'tabs__root',
    list: 'tabs__list',
    trigger: 'tabs__trigger',
    content: 'tabs__content',
    indicator: 'tabs__indicator',
  },
  variants: {
    variant: {
      line: {
        root: 'tabs__root--variant_line',
        list: 'tabs__list--variant_line',
        trigger: 'tabs__trigger--variant_line',
        content: 'tabs__content--variant_line',
        indicator: 'tabs__indicator--variant_line',
      },
      outline: {
        root: 'tabs__root--variant_outline',
        list: 'tabs__list--variant_outline',
        trigger: 'tabs__trigger--variant_outline',
        content: 'tabs__content--variant_outline',
        indicator: 'tabs__indicator--variant_outline',
      },
    },
    size: {
      sm: {
        root: 'tabs__root--size_sm',
        list: 'tabs__list--size_sm',
        trigger: 'tabs__trigger--size_sm',
        content: 'tabs__content--size_sm',
        indicator: 'tabs__indicator--size_sm',
      },
      md: {
        root: 'tabs__root--size_md',
        list: 'tabs__list--size_md',
        trigger: 'tabs__trigger--size_md',
        content: 'tabs__content--size_md',
        indicator: 'tabs__indicator--size_md',
      },
      lg: {
        root: 'tabs__root--size_lg',
        list: 'tabs__list--size_lg',
        trigger: 'tabs__trigger--size_lg',
        content: 'tabs__content--size_lg',
        indicator: 'tabs__indicator--size_lg',
      },
    },
  },
})
const { withProvider, withContext } = createStyleContext(styles)

const TabsRoot = withProvider(ArkTabs.Root, 'root')
const TabsContent = withContext(ArkTabs.Content, 'content')
const TabsIndicator = withContext(ArkTabs.Indicator, 'indicator')
const TabsList = withContext(ArkTabs.List, 'list')
const TabsTrigger = withContext(ArkTabs.Trigger, 'trigger')

const Root = TabsRoot
const Content = TabsContent
const Indicator = TabsIndicator
const List = TabsList
const Trigger = TabsTrigger

export {
  Content,
  Indicator,
  List,
  Root,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsRoot,
  TabsTrigger,
  Trigger,
}
