'use client'
import { Resizable } from 're-resizable'
import { Box, Flex } from 'styled-system/jsx'
import { IFrameExample } from './iframe-example'

interface Props {
  categoryId: string
  variantId: string
}

export const BlockPreview = (props: Props) => {
  const { categoryId, variantId } = props
  return (
    <Resizable
      bounds="parent"
      enable={{ right: true }}
      minWidth="414"
      handleComponent={{
        right: (
          <Flex
            display={{ base: 'none', md: 'flex' }}
            position="absolute"
            height="full"
            px="3"
            justify="center"
            align="center"
            cursor="ew-resize"
          >
            <Box width="1.5" h="8" borderRadius="full" bg="border.default" />
          </Flex>
        ),
      }}
    >
      <Box width="full" borderWidth="1px" borderRadius="l3" overflow="hidden">
        <IFrameExample
          src={`http://localhost:3000/plus/categories/${categoryId}/variants/${variantId}`}
        />
      </Box>
    </Resizable>
  )
}
