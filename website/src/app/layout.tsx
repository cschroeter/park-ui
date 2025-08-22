import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import type { PropsWithChildren } from 'react'
import { cx } from 'styled-system/css'
import { Navbar } from '~/components/navigation/navbar'
import { inter, jakarta, outfit, raleway, roboto } from './fonts'
import './index.css'

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
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
