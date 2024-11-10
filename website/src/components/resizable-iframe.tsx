'use client'
import { EnvironmentProvider } from '@ark-ui/react/environment'
import { useIsClient } from '@uidotdev/usehooks'
import { useTheme } from 'next-themes'
import { Resizable } from 're-resizable'
import { type PropsWithChildren, useEffect } from 'react'
import Frame, { useFrame } from 'react-frame-component'
import { cx } from 'styled-system/css'
import { Box, Flex } from 'styled-system/jsx'
import { inter, jakarta, outfit, raleway, roboto } from '~/app/fonts'
import { useIFrameResizeObserver } from '~/lib/use-iframe-resize-observer'

export const ResizableIFrame = (props: PropsWithChildren) => {
  const { height, ref } = useIFrameResizeObserver()
  const isClient = useIsClient()

  if (!isClient) {
    return null
  }

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
        <Frame
          ref={ref}
          style={{ height, width: '100%' }}
          initialContent={`<!DOCTYPE html><html class="${cx(
            inter.variable,
            jakarta.variable,
            outfit.variable,
            raleway.variable,
            roboto.variable,
          )}"><head><body><div class="frame-root"></div></body></html>`}
        >
          <PandaProvider {...props} />
        </Frame>
      </Box>
    </Resizable>
  )
}

const PandaProvider = (props: PropsWithChildren) => {
  const iframe = useFrame()
  const { resolvedTheme } = useTheme()

  // useThemeGenerator(iframe)

  useEffect(() => {
    const styleTags = document.head.querySelectorAll('link[rel="stylesheet"]')
    styleTags.forEach((styleTag) => {
      const frameStyles = styleTag.cloneNode(true)
      if (frameStyles) iframe.document?.head.append(frameStyles)
    })
  }, [iframe])

  useEffect(() => {
    const classList = iframe.document?.documentElement.classList
    if (!classList) return

    const themeClass = resolvedTheme === 'dark' ? 'dark' : 'light'
    classList.add(themeClass)
    classList.remove(themeClass === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, iframe])

  return iframe.document ? (
    <EnvironmentProvider value={iframe.document}>{props.children}</EnvironmentProvider>
  ) : (
    props.children
  )
}
