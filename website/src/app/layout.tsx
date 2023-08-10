import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'
import { Fira_Code, Plus_Jakarta_Sans } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { cx } from 'styled-system/css/cx'
import { Navbar } from '~/components/layout/navbar'
import { colorModeLocalStorageKey } from '~/lib/use-color-mode'
import '../global.css'

const body = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-body' })
const code = Fira_Code({ subsets: ['latin'], variable: '--font-code' })

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en" className={cx(body.variable, code.variable)}>
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
