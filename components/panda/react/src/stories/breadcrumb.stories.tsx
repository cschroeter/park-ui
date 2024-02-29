import type { Meta } from '@storybook/react'
import { Breadcrumb } from '~/components/ui'

const meta: Meta = {
  title: 'Components/Breadcrumb',
}

export default meta

export const Base = () => {
  return (
    <Breadcrumb
      items={[
        { href: '/home', title: 'Home' },
        { href: '/about', title: 'About' },
        { href: '/contact', title: 'Contact' },
      ]}
    />
  )
}
