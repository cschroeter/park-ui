import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { cx } from 'styled-system/css'
import { Navbar } from '~/components/navigation/navbar'
import { inter, jakarta, outfit, raleway, roboto } from './fonts'
import './index.css'

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
        jakarta.variable,
        raleway.variable,
        roboto.variable,
      )}
    >
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Navbar />
          {props.children}
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
  keywords: ['Panda', 'CSS', 'Ark UI', 'Components', 'React', 'Solid', 'Vue'],
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
