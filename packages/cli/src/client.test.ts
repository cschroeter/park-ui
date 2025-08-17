import { Effect } from 'effect'
import { describe, expect, it } from 'vitest'
import { client } from './client'

describe('Client', () => {
  it('should return component data when fetching by framework and id', async () => {
    const data = await Effect.runPromise(client.getComponent({ framework: 'react', id: 'button' }))

    expect(data.id).toEqual('button')
    expect(data.type).toEqual('component')
  })

  it('should return list of component IDs for a given framework', async () => {
    const data = await Effect.runPromise(client.getComponentIds('react'))

    expect(data?.length).toBeGreaterThan(0)
  })

  it('should handle unknown component gracefully', async () => {
    expect(
      async () =>
        await Effect.runPromise(
          client.getComponent({ framework: 'react', id: 'unknown-component' }),
        ),
    ).toThrow()
  })
})
