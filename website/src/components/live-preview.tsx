import { generateElement } from 'react-live'
import { Box, Flex, HStack, Stack } from 'styled-system/jsx'
import * as components from '~/components/ui'

const scope = { ...components, Stack, HStack, Box, Flex }

type Props = {
  code: string
}

export const LivePreview = (props: Props) => {
  const { code } = props
  const Element = generateElement({ code, scope, enableTypeScript: true }, () =>
    console.log('rendered'),
  )

  return <Element />
}
