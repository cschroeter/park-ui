import type { PropsWithChildren } from 'react'
import { getServerContext } from '~/lib/server-context'

interface Props {
  params: { framework: string }
}

export default function Layout(props: PropsWithChildren<Props>) {
  const serverContext = getServerContext()
  serverContext.framework = props.params.framework

  return props.children
}
