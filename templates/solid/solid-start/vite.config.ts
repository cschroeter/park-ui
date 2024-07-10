import { defineConfig } from '@solidjs/start/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths({ root: './' })],
})
