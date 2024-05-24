import { Tabs } from '@ark-ui/react/tabs'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const tabs = tv(
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
const { withProvider, withContext } = createStyleContext(tabs)

export interface RootProps extends Tabs.RootProps, VariantProps<typeof tabs> {}
export const Root = withProvider<HTMLDivElement, RootProps>(Tabs.Root, 'root')

export const Content = withContext<HTMLDivElement, Tabs.ContentProps>(Tabs.Content, 'content')

export const Indicator = withContext<HTMLDivElement, Tabs.IndicatorProps>(
  Tabs.Indicator,
  'indicator',
)

export const List = withContext<HTMLDivElement, Tabs.ListProps>(Tabs.List, 'list')

export const Trigger = withContext<HTMLButtonElement, Tabs.TriggerProps>(Tabs.Trigger, 'trigger')

export { TabsContext as Context, type TabsContextProps as ContextProps } from '@ark-ui/react/tabs'
