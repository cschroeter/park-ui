import type { PropsWithChildren } from 'react'
import { styled } from 'styled-system/jsx'

export default function Layout(props: PropsWithChildren) {
  const { children } = props

  return <styled.main mt="16">{children}</styled.main>
}
