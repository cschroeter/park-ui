import { defineConfig } from '@pandacss/dev'
import { plugin, preset } from '@park-ui/preset'

export default defineConfig({
  presets: [preset],
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  jsxFramework: 'react',
  plugins: [plugin],
})
