export const appFolder = `.
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   └── page.ts
│   ├── components
│   │   ├── button.tsx
│   │   └── ...
│   └── global.css
├── next.config.mjs
├── package.json
├── panda.config.ts
├── postcss.config.cjs
└── tsconfig.json
`

export const copyButton = `import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { button, type ButtonVariantProps } from 'styled-system/recipes'

export type ButtonProps = ButtonVariantProps & ComponentProps<'button'>
export const Button = styled('button', button)
`

export const useButton = `import { Button } from "~/components/button"
 
const App = () => (
  <Button>Click me</Button>
)
`

export const pandaConfig = `import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: ['@pandacss/dev/presets', '@park-ui/presets'],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'react',
  outdir: 'styled-system'
})
`
