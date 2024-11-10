import { describe, expect, test } from 'bun:test'
import amber from '../colors/amber'
import { createVariables } from './utils'

describe('utils', () => {
  test('create css variables', () => {
    const cssVariables = createVariables(amber)
    expect(cssVariables).toMatchSnapshot()
  })
})
