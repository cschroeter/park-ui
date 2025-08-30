'use client'
import { Tabs } from '@/components/ui'

interface Props {
  children?: React.ReactNode
  when?: boolean
}

export const Hide = (props: Props) => {
  const { children, when } = props

  return when ? <Tabs.Context>{(api) => (api.value ? children : <div />)}</Tabs.Context> : children
}
