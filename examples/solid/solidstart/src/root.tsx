// @refresh reload
import './root.css'

import { css } from '@styled-system/css'
import { Box, Container, styled } from '@styled-system/jsx'
import { container } from '@styled-system/patterns'
import { Suspense } from 'solid-js'
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from 'solid-start'

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Example Park UI</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class={css({ backgroundColor: 'bg.canvas' })}>
        <Suspense>
          <ErrorBoundary>
            <Box
              bg="bg.default"
              borderBlockEnd={'1px solid'}
              borderColor={'border.default'}
              zIndex={'sticky'}
              position={'fixed'}
              w="full"
            >
              <Container>
                <A href="/">Index</A>
                <A href="/article">Article</A>
                <A href="/nnnnnnnnnnnnnnnnnnnnnnnnn">Not Found</A>
              </Container>
            </Box>
            <styled.main pt="12" class={container()}>
              <Routes>
                <FileRoutes />
              </Routes>
            </styled.main>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  )
}
