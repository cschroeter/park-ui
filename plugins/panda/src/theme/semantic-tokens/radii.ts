import { defineSemanticTokens } from '@pandacss/dev'
import { match } from 'ts-pattern'
import type { BorderRadius } from '../../types'

export const createRadiiTokens = (borderRadius: BorderRadius) => {
  return defineSemanticTokens.radii(
    match(borderRadius)
      .with('none', () => ({
        l1: { value: '{radii.none}' },
        l2: { value: '{radii.none}' },
        l3: { value: '{radii.none}' },
      }))
      .with('xs', () => ({
        l1: { value: '{radii.2xs}' },
        l2: { value: '{radii.xs}' },
        l3: { value: '{radii.sm}' },
      }))
      .with('sm', () => ({
        l1: { value: '{radii.xs}' },
        l2: { value: '{radii.sm}' },
        l3: { value: '{radii.md}' },
      }))
      .with('md', () => ({
        l1: { value: '{radii.sm}' },
        l2: { value: '{radii.md}' },
        l3: { value: '{radii.lg}' },
      }))
      .with('lg', () => ({
        l1: { value: '{radii.md}' },
        l2: { value: '{radii.lg}' },
        l3: { value: '{radii.xl}' },
      }))
      .with('xl', () => ({
        l1: { value: '{radii.lg}' },
        l2: { value: '{radii.xl}' },
        l3: { value: '{radii.2xl}' },
      }))
      .with('2xl', () => ({
        l1: { value: '{radii.xl}' },
        l2: { value: '{radii.2xl}' },
        l3: { value: '{radii.3xl}' },
      }))
      .exhaustive(),
  )
}
