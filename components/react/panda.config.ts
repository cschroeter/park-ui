import { createPreset } from '@dcousineau/park-ui-panda-preset'
import amber from '@dcousineau/park-ui-panda-preset/colors/amber'
import sand from '@dcousineau/park-ui-panda-preset/colors/sand'
import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  presets: [createPreset({ accentColor: amber, grayColor: sand, radius: 'sm' })],
  include: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  jsxFramework: 'react', // or solid or vue
  outdir: 'styled-system',
})
