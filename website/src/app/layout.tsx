import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { cx } from 'styled-system/css'
import { Toaster } from '@/components/ui'
import { Navbar } from '~/components/navigation/navbar'
import { ThemeTokens } from '~/components/theme/theme-tokens'
import { dmSans, inter, outfit, roboto, space } from './fonts'
import './index.css'
import Script from 'next/script'

export default async function RootLayout(props: PropsWithChildren) {
  const cookieStore = await cookies()
  const state = cookieStore.get('park-ui')

  const { accentColor, grayColor } = state?.value
    ? JSON.parse(state.value).state
    : { accentColor: 'neutral', grayColor: 'neutral' }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-accent-color={accentColor}
      data-gray-color={grayColor}
      className={cx(
        outfit.variable,
        inter.variable,
        roboto.variable,
        space.variable,
        dmSans.variable,
      )}
    >
      <head>
        <ThemeTokens />
        <Script src="https://plausible.io/js/plausible.js" data-domain="park-ui.com" />
      </head>
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Navbar />
          {props.children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL('https://park-ui.com'),
  applicationName: 'Park UI',
  title: {
    default: 'Home | Park UI',
    template: '%s | Park UI',
  },
  description:
    'Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks.',
  manifest: '/site.webmanifest',
  keywords: ['Panda', 'CSS', 'Ark UI', 'Components', 'React', 'Solid'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://park-ui.com',
    description:
      'Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks.',
  },
  twitter: {
    creator: '@grizzly_codes',
  },
}
