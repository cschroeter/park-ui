import { describe, it } from 'bun:test'
import { client } from './client'

describe('Client', () => {
  it('should fetch a component', async () => {
    const response = await client.fetchComponent({ framework: 'react', id: 'button' })
    console.log(response)
  })
})
