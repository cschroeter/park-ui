import type { Token } from 'styled-system/tokens'
import { match } from 'ts-pattern'
import type { BorderRadii } from './use-theme-generator'

export const getBorderRadiiTokens = (borderRadii: BorderRadii) => {
  return match<BorderRadii, Record<'l1' | 'l2' | 'l3', Token>>(borderRadii)
    .with(0, () => ({
      l1: 'radii.none',
      l2: 'radii.none',
      l3: 'radii.none',
    }))
    .with(1, () => ({
      l1: 'radii.2xs',
      l2: 'radii.xs',
      l3: 'radii.sm',
    }))
    .with(2, () => ({
      l1: 'radii.xs',
      l2: 'radii.sm',
      l3: 'radii.md',
    }))
    .with(3, () => ({
      l1: 'radii.sm',
      l2: 'radii.md',
      l3: 'radii.lg',
    }))
    .with(4, () => ({
      l1: 'radii.md',
      l2: 'radii.lg',
      l3: 'radii.xl',
    }))
    .with(5, () => ({
      l1: 'radii.lg',
      l2: 'radii.xl',
      l3: 'radii.2xl',
    }))
    .with(6, () => ({
      l1: 'radii.xl',
      l2: 'radii.2xl',
      l3: 'radii.3xl',
    }))
    .exhaustive()
}
