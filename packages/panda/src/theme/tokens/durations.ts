import { defineTokens } from '@pandacss/dev'

export const radii = defineTokens.durations({
  fastest: { value: '50ms' },
  faster: { value: '100ms' },
  fast: { value: '150ms' },
  normal: { value: '200ms' },
  slow: { value: '300ms' },
  slower: { value: '400ms' },
  slowest: { value: '500ms' },
})
