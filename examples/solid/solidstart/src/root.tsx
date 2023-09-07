// @refresh reload
import './root.css'

import { css } from '@styled-system/css'
import { Box, Container, Stack, styled } from '@styled-system/jsx'
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

import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'

const menuLinkStyle = css({
  display: 'inline-block',
  textDecoration: 'none',
  paddingBlock: '0.5rem',
  paddingInline: '0.75rem',
  borderRadius: 'sm',
  '&:hover': {
    bg: 'bg.subtle',
  },
})

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
              <Container py="2.5">
                <Stack direction="row" justifyContent={'space-between'}>
                  <styled.nav>
                    <A class={menuLinkStyle} href="/">
                      Index
                    </A>
                    <A class={menuLinkStyle} href="/article">
                      Article
                    </A>
                    <A class={menuLinkStyle} href="/nnnnnnnnnnnnnnnnnnnnnnnnn">
                      Not Found
                    </A>
                  </styled.nav>
                  <Box>
                    <Avatar>
                      <AvatarFallback>PA</AvatarFallback>
                      <AvatarImage src="https://i.pravatar.cc/300" alt="avatar" />
                    </Avatar>
                  </Box>
                </Stack>
              </Container>
            </Box>
            <styled.main pt="20" class={container()}>
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
