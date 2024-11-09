import { describe, expect, test } from 'bun:test'
import amber from '../colors/amber'
import { createSemanticTokens, createTokens, createVariables } from './variables'

describe('utils', () => {
  test('create base variables', () => {
    const variables = createTokens(amber)

    expect(variables).toContain('--colors-amber-light-1: #fefdfb;')
    expect(variables).toContain('--colors-amber-light-12: #4f3422;')
    expect(variables).toContain('--colors-amber-light-a1: #c0800004;')
    expect(variables).toContain('--colors-amber-light-a12: #341500dd;')
    expect(variables).toContain('--colors-amber-dark-1: #16120c;')
    expect(variables).toContain('--colors-amber-dark-12: #ffe7b3;')
    expect(variables).toContain('--colors-amber-dark-a1: #e63c0006;')
    expect(variables).toContain('--colors-amber-dark-a12: #ffe7b3;')
  })

  test('create semantic variables', () => {
    const variables = createSemanticTokens(amber)
    expect(variables).toHaveProperty('light')
    expect(variables).toHaveProperty('dark')

    expect(variables.light).toContain('--colors-amber-1: var(--colors-amber-light-1);')
    expect(variables.light).toContain('--colors-amber-12: var(--colors-amber-light-12);')
    expect(variables.light).toContain('--colors-amber-a1: var(--colors-amber-light-a1);')
    expect(variables.light).toContain('--colors-amber-a12: var(--colors-amber-light-a12);')
    expect(variables.light).toContain('--colors-amber-text: var(--colors-amber-light-a11);')
  })

  test('create semantic variables', () => {
    const foo = createVariables(amber)
    expect(foo).toMatchSnapshot()
  })
})
