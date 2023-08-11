import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'

import type { PropsWithChildren } from 'react'
import { cx } from 'styled-system/css/cx'
import { Navbar } from '~/components/layout/navbar'
import { colorModeLocalStorageKey } from '~/lib/use-color-mode'
import '../global.css'
import { firaCode, inter, jakarta, outfit, raleway } from './fonts'

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html
      lang="en"
      className={cx(
        inter.variable,
        firaCode.variable,
        outfit.variable,
        jakarta.variable,
        raleway.variable,
      )}
    >
      <head>
        <ColorModeScript />
      </head>
      <body>
        <Analytics />
        <Navbar />
        {props.children}
      </body>
    </html>
  )
}

export default RootLayout

export const metadata: Metadata = {
  title: {
    default: 'Park UI',
    template: '%s | Park UI',
  },
  description: 'Beautifully designed components built with Ark UI and Panda CSS.',
  manifest: '/site.webmanifest',
  keywords: ['Panda CSS', 'Ark UI', 'Components', 'React', 'Solid', 'Vue'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://panda-ui.com',
    description: 'Beautifully designed components built with Ark UI and Panda CSS.',
  },
  twitter: {
    creator: '@grizzly_codes',
  },
}

const ColorModeScript = () => {
  const colorModeScript =
    // language=javascript
    `if (JSON.parse(window.localStorage.getItem('${colorModeLocalStorageKey}')) === 'dark') {
    document.documentElement.classList.add('dark')
  }`
  return <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
}
