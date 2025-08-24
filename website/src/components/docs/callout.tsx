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
    <Box borderWidth="1px" p="4">
      {props.children}
    </Box>
  )
}
