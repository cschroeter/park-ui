import { Breadcrumb, type BreadcrumbProps } from '~/components/ui/breadcrumb'

export const Demo = (props: BreadcrumbProps) => {
  return (
    <Breadcrumb
      {...props}
      items={[
        { href: '#', title: 'Home' },
        { href: '#', title: 'About' },
        { href: '#', title: 'Contact' },
      ]}
    />
  )
}
