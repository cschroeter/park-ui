import { describe, expect, it } from 'vitest'
import { client } from './client'

describe('Client', () => {
  it('should return component data when fetching by framework and id', async () => {
    const { data, error } = await client.getComponent({ framework: 'react', id: 'button' })
    expect(error).toBeNull()

    expect(data?.id).toEqual('button')
    expect(data?.type).toEqual('component')
  })

  it('should return list of component IDs for a given framework', async () => {
    const { data, error } = await client.getComponentIds('react')
    expect(error).toBeNull()

    expect(data?.length).toBeGreaterThan(0)
  })

  it('should handle unknown component gracefully', async () => {
    const { data, error } = await client.getComponent({
      framework: 'react',
      id: 'unknown-component',
    })

    expect(error).toEqual({ status: 404, statusText: 'Not Found' })
    expect(data).toBeNull()
  })
})
