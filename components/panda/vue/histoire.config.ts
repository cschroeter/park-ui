import { HstVue } from '@histoire/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
  setupFile: '/src/setup.ts',
  plugins: [HstVue()],
})
