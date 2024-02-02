import { Tabs } from '@ark-ui/solid'
import type { ComponentProps } from 'solid-js'
import { tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const styles = tv(
  {
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
        enclosed: {
          root: 'tabs__root--variant_enclosed',
          list: 'tabs__list--variant_enclosed',
          trigger: 'tabs__trigger--variant_enclosed',
          content: 'tabs__content--variant_enclosed',
          indicator: 'tabs__indicator--variant_enclosed',
        },
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
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(styles)

export const Root = withProvider(Tabs.Root, 'root')
export const Content = withContext(Tabs.Content, 'content')
export const Indicator = withContext(Tabs.Indicator, 'indicator')
export const List = withContext(Tabs.List, 'list')
export const Trigger = withContext(Tabs.Trigger, 'trigger')

export type RootProps = ComponentProps<typeof Root>
export interface ContentProps extends ComponentProps<typeof Content> {}
export interface IndicatorProps extends ComponentProps<typeof Indicator> {}
export interface ListProps extends ComponentProps<typeof List> {}
export interface TriggerProps extends ComponentProps<typeof Trigger> {}
