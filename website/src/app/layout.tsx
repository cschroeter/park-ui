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
        {/* <StyleTagAmber /> */}
        <StyleTagRed />
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

const StyleTagAmber = () => {
  return (
    <style>
      {`
        @layer tokens {
  :where(:root, :host) {
    --colors-amber-light-1: #fefdfb;
    --colors-amber-light-2: #fefbe9;
    --colors-amber-light-3: #fff7c2;
    --colors-amber-light-4: #ffee9c;
    --colors-amber-light-5: #fbe577;
    --colors-amber-light-6: #f3d673;
    --colors-amber-light-7: #e9c162;
    --colors-amber-light-8: #e2a336;
    --colors-amber-light-9: #ffc53d;
    --colors-amber-light-10: #ffba18;
    --colors-amber-light-11: #ab6400;
    --colors-amber-light-12: #4f3422;
    --colors-amber-light-a1: #c0800004;
    --colors-amber-light-a2: #f4d10016;
    --colors-amber-light-a3: #ffde003d;
    --colors-amber-light-a4: #ffd40063;
    --colors-amber-light-a5: #f8cf0088;
    --colors-amber-light-a6: #eab5008c;
    --colors-amber-light-a7: #dc9b009d;
    --colors-amber-light-a8: #da8a00c9;
    --colors-amber-light-a9: #ffb300c2;
    --colors-amber-light-a10: #ffb300e7;
    --colors-amber-light-a11: #ab6400;
    --colors-amber-light-a12: #341500dd;
    --colors-amber-dark-1: #16120c;
    --colors-amber-dark-2: #1d180f;
    --colors-amber-dark-3: #302008;
    --colors-amber-dark-4: #3f2700;
    --colors-amber-dark-5: #4d3000;
    --colors-amber-dark-6: #5c3d05;
    --colors-amber-dark-7: #714f19;
    --colors-amber-dark-8: #8f6424;
    --colors-amber-dark-9: #ffc53d;
    --colors-amber-dark-10: #ffd60a;
    --colors-amber-dark-11: #ffca16;
    --colors-amber-dark-12: #ffe7b3;
    --colors-amber-dark-a1: #e63c0006;
    --colors-amber-dark-a2: #fd9b000d;
    --colors-amber-dark-a3: #fa820022;
    --colors-amber-dark-a4: #fc820032;
    --colors-amber-dark-a5: #fd8b0041;
    --colors-amber-dark-a6: #fd9b0051;
    --colors-amber-dark-a7: #ffab2567;
    --colors-amber-dark-a8: #ffae3587;
    --colors-amber-dark-a9: #ffc53d;
    --colors-amber-dark-a10: #ffd60a;
    --colors-amber-dark-a11: #ffca16;
    --colors-amber-dark-a12: #ffe7b3;

    --colors-color-palette-default: var(--colors-amber-default);
    --colors-color-palette-emphasized: var(--colors-amber-emphasized);
    --colors-color-palette-fg: var(--colors-amber-fg);
    --colors-color-palette-text: var(--colors-amber-text);
  }

  :where(:root, .light) {
    --colors-amber-1: var(--colors-amber-light-1);
    --colors-amber-2: var(--colors-amber-light-2);
    --colors-amber-3: var(--colors-amber-light-3);
    --colors-amber-4: var(--colors-amber-light-4);
    --colors-amber-5: var(--colors-amber-light-5);
    --colors-amber-6: var(--colors-amber-light-6);
    --colors-amber-7: var(--colors-amber-light-7);
    --colors-amber-8: var(--colors-amber-light-8);
    --colors-amber-9: var(--colors-amber-light-9);
    --colors-amber-10: var(--colors-amber-light-10);
    --colors-amber-11: var(--colors-amber-light-11);
    --colors-amber-12: var(--colors-amber-light-12);
    --colors-amber-a1: var(--colors-amber-light-a1);
    --colors-amber-a2: var(--colors-amber-light-a2);
    --colors-amber-a3: var(--colors-amber-light-a3);
    --colors-amber-a4: var(--colors-amber-light-a4);
    --colors-amber-a5: var(--colors-amber-light-a5);
    --colors-amber-a6: var(--colors-amber-light-a6);
    --colors-amber-a7: var(--colors-amber-light-a7);
    --colors-amber-a8: var(--colors-amber-light-a8);
    --colors-amber-a9: var(--colors-amber-light-a9);
    --colors-amber-a10: var(--colors-amber-light-a10);
    --colors-amber-a11: var(--colors-amber-light-a11);
    --colors-amber-a12: var(--colors-amber-light-a12);
    --colors-amber-default: var(--colors-amber-light-9);
    --colors-amber-emphasized: var(--colors-amber-light-10);
    --colors-amber-fg: var(--colors-gray-light-12);
    --colors-amber-text: var(--colors-amber-light-a11);
  }

  .dark {
    --colors-amber-1: var(--colors-amber-dark-1);
    --colors-amber-2: var(--colors-amber-dark-2);
    --colors-amber-3: var(--colors-amber-dark-3);
    --colors-amber-4: var(--colors-amber-dark-4);
    --colors-amber-5: var(--colors-amber-dark-5);
    --colors-amber-6: var(--colors-amber-dark-6);
    --colors-amber-7: var(--colors-amber-dark-7);
    --colors-amber-8: var(--colors-amber-dark-8);
    --colors-amber-9: var(--colors-amber-dark-9);
    --colors-amber-10: var(--colors-amber-dark-10);
    --colors-amber-11: var(--colors-amber-dark-11);
    --colors-amber-12: var(--colors-amber-dark-12);
    --colors-amber-a1: var(--colors-amber-dark-a1);
    --colors-amber-a2: var(--colors-amber-dark-a2);
    --colors-amber-a3: var(--colors-amber-dark-a3);
    --colors-amber-a4: var(--colors-amber-dark-a4);
    --colors-amber-a5: var(--colors-amber-dark-a5);
    --colors-amber-a6: var(--colors-amber-dark-a6);
    --colors-amber-a7: var(--colors-amber-dark-a7);
    --colors-amber-a8: var(--colors-amber-dark-a8);
    --colors-amber-a9: var(--colors-amber-dark-a9);
    --colors-amber-a10: var(--colors-amber-dark-a10);
    --colors-amber-a11: var(--colors-amber-dark-a11);
    --colors-amber-a12: var(--colors-amber-dark-a12);
    --colors-amber-default: var(--colors-amber-dark-9);
    --colors-amber-emphasized: var(--colors-amber-dark-10);
    --colors-amber-fg: var(--colors-gray-light-12);
    --colors-amber-text: var(--colors-amber-dark-a11);
  }
}
`}
    </style>
  )
}

const StyleTagRed = () => {
  return (
    <style id="park-ui-theme">
      {`
    @layer tokens {
  :where(:root, :host) {
    --colors-red-light-1: #fffcfc;
    --colors-red-light-2: #fff7f7;
    --colors-red-light-3: #feebec;
    --colors-red-light-4: #ffdbdc;
    --colors-red-light-5: #ffcdce;
    --colors-red-light-6: #fdbdbe;
    --colors-red-light-7: #f4a9aa;
    --colors-red-light-8: #eb8e90;
    --colors-red-light-9: #e5484d;
    --colors-red-light-10: #dc3e42;
    --colors-red-light-11: #ce2c31;
    --colors-red-light-12: #641723;
    --colors-red-light-a1: #ff000003;
    --colors-red-light-a2: #ff000008;
    --colors-red-light-a3: #f3000d14;
    --colors-red-light-a4: #ff000824;
    --colors-red-light-a5: #ff000632;
    --colors-red-light-a6: #f8000442;
    --colors-red-light-a7: #df000356;
    --colors-red-light-a8: #d2000571;
    --colors-red-light-a9: #db0007b7;
    --colors-red-light-a10: #d10005c1;
    --colors-red-light-a11: #c40006d3;
    --colors-red-light-a12: #55000de8;
    --colors-red-dark-1: #191111;
    --colors-red-dark-2: #201314;
    --colors-red-dark-3: #3b1219;
    --colors-red-dark-4: #500f1c;
    --colors-red-dark-5: #611623;
    --colors-red-dark-6: #72232d;
    --colors-red-dark-7: #8c333a;
    --colors-red-dark-8: #b54548;
    --colors-red-dark-9: #e5484d;
    --colors-red-dark-10: #ec5d5e;
    --colors-red-dark-11: #ff9592;
    --colors-red-dark-12: #ffd1d9;
    --colors-red-dark-a1: #f4121209;
    --colors-red-dark-a2: #f22f3e11;
    --colors-red-dark-a3: #ff173f2d;
    --colors-red-dark-a4: #fe0a3b44;
    --colors-red-dark-a5: #ff204756;
    --colors-red-dark-a6: #ff3e5668;
    --colors-red-dark-a7: #ff536184;
    --colors-red-dark-a8: #ff5d61b0;
    --colors-red-dark-a9: #fe4e54e4;
    --colors-red-dark-a10: #ff6465eb;
    --colors-red-dark-a11: #ff9592;
    --colors-red-dark-a12: #ffd1d9;

    --colors-color-palette-default: var(--colors-red-default);
    --colors-color-palette-emphasized: var(--colors-red-emphasized);
    --colors-color-palette-fg: var(--colors-red-fg);
    --colors-color-palette-text: var(--colors-red-text);
  }

  :where(:root, .light) {
    --colors-red-1: var(--colors-red-light-1);
    --colors-red-2: var(--colors-red-light-2);
    --colors-red-3: var(--colors-red-light-3);
    --colors-red-4: var(--colors-red-light-4);
    --colors-red-5: var(--colors-red-light-5);
    --colors-red-6: var(--colors-red-light-6);
    --colors-red-7: var(--colors-red-light-7);
    --colors-red-8: var(--colors-red-light-8);
    --colors-red-9: var(--colors-red-light-9);
    --colors-red-10: var(--colors-red-light-10);
    --colors-red-11: var(--colors-red-light-11);
    --colors-red-12: var(--colors-red-light-12);
    --colors-red-a1: var(--colors-red-light-a1);
    --colors-red-a2: var(--colors-red-light-a2);
    --colors-red-a3: var(--colors-red-light-a3);
    --colors-red-a4: var(--colors-red-light-a4);
    --colors-red-a5: var(--colors-red-light-a5);
    --colors-red-a6: var(--colors-red-light-a6);
    --colors-red-a7: var(--colors-red-light-a7);
    --colors-red-a8: var(--colors-red-light-a8);
    --colors-red-a9: var(--colors-red-light-a9);
    --colors-red-a10: var(--colors-red-light-a10);
    --colors-red-a11: var(--colors-red-light-a11);
    --colors-red-a12: var(--colors-red-light-a12);
    --colors-red-default: var(--colors-red-light-9);
    --colors-red-emphasized: var(--colors-red-light-10);
    --colors-red-fg: white;
    --colors-red-text: var(--colors-red-light-a11);
  }

  .dark {
    --colors-red-1: var(--colors-red-dark-1);
    --colors-red-2: var(--colors-red-dark-2);
    --colors-red-3: var(--colors-red-dark-3);
    --colors-red-4: var(--colors-red-dark-4);
    --colors-red-5: var(--colors-red-dark-5);
    --colors-red-6: var(--colors-red-dark-6);
    --colors-red-7: var(--colors-red-dark-7);
    --colors-red-8: var(--colors-red-dark-8);
    --colors-red-9: var(--colors-red-dark-9);
    --colors-red-10: var(--colors-red-dark-10);
    --colors-red-11: var(--colors-red-dark-11);
    --colors-red-12: var(--colors-red-dark-12);
    --colors-red-a1: var(--colors-red-dark-a1);
    --colors-red-a2: var(--colors-red-dark-a2);
    --colors-red-a3: var(--colors-red-dark-a3);
    --colors-red-a4: var(--colors-red-dark-a4);
    --colors-red-a5: var(--colors-red-dark-a5);
    --colors-red-a6: var(--colors-red-dark-a6);
    --colors-red-a7: var(--colors-red-dark-a7);
    --colors-red-a8: var(--colors-red-dark-a8);
    --colors-red-a9: var(--colors-red-dark-a9);
    --colors-red-a10: var(--colors-red-dark-a10);
    --colors-red-a11: var(--colors-red-dark-a11);
    --colors-red-a12: var(--colors-red-dark-a12);
    --colors-red-default: var(--colors-red-dark-9);
    --colors-red-emphasized: var(--colors-red-dark-10);
    --colors-red-fg: white;
    --colors-red-text: var(--colors-red-dark-a11);
  }
}

    `}
    </style>
  )
}
