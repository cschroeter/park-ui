import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import Script from 'next/script'
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

interface Props {
  auth: React.ReactNode
  children: React.ReactNode
}

export default function RootLayout(props: Props) {
  return (
    <html
      lang="en"
      className={cx(
        outfit.variable,
        inter.variable,
        jakarta.variable,
        raleway.variable,
        roboto.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <Script src="https://plausible.io/js/plausible.js" data-domain="park-ui.com" />
        <style id="park-ui-gray" />
        <style id="park-ui-accent" />
      </head>
      <body>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <Navbar />
          {props.children}
          {props.auth}
        </ThemeProvider>
      </body>
    </html>
  )
}
