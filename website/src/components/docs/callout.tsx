import type { ReactNode } from 'react'
import { Box } from 'styled-system/jsx'

interface Props {
  children?: ReactNode
  /**
   * @default 'info'
   */
  type: 'info' | 'warning'
}

export const Callout = (props: Props) => {
  return (
    <Box borderWidth="1px" p="4" borderRadius="l3" className="not-prose">
      {props.children}
    </Box>
  )
}
