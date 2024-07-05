import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
import type { PropsWithChildren } from 'react'
import { cx } from 'styled-system/css'
import { Navbar } from '~/components/navigation/navbar'
import { inter, jakarta, outfit, raleway, roboto } from './fonts'
import './global.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://park-ui.com'),
  title: {
    default: 'Home | Park UI',
    template: '%s | Park UI',
  },
  description:
    'Beautifully designed components built with Ark UI and Panda CSS that work with a variety of JS frameworks.',
  manifest: '/site.webmanifest',
  keywords: ['Panda', 'Tailwind', 'CSS', 'Ark UI', 'Components', 'React', 'Solid', 'Vue'],
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

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        jakarta.variable,
        outfit.variable,
        raleway.variable,
        roboto.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <Script src="https://plausible.io/js/plausible.js" data-domain="park-ui.com" />
      </head>
      <body>
        <ThemeProvider attribute="class">
          <Navbar />
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}
