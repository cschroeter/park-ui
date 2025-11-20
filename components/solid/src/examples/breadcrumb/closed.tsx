import { For, type JSX, Show } from 'solid-js'
import { Breadcrumb as StyledBreadcrumb } from '@/components/ui'

export interface BreadcrumbProps extends StyledBreadcrumb.RootProps {
  items: Array<{ title: JSX.Element; url?: string }>
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  return (
    <StyledBreadcrumb.Root {...props}>
      <StyledBreadcrumb.List>
        <For each={props.items}>
          {(item, index) => {
            const last = () => index() === props.items.length - 1

            return (
              <Show
                when={!last()}
                fallback={<StyledBreadcrumb.Item>{item.title}</StyledBreadcrumb.Item>}
              >
                <StyledBreadcrumb.Item>
                  {item.url ? (
                    <StyledBreadcrumb.Link href={item.url}>{item.title}</StyledBreadcrumb.Link>
                  ) : (
                    item.title
                  )}
                </StyledBreadcrumb.Item>
                <StyledBreadcrumb.Separator />
              </Show>
            )
          }}
        </For>
      </StyledBreadcrumb.List>
    </StyledBreadcrumb.Root>
  )
}
