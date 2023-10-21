import type { HeadFC, PageProps } from 'gatsby'
import * as React from 'react'
import { Button } from '../ui/button/snippet'

const IndexPage: React.FC<PageProps> = () => {
  return <Button>Hello Park UI</Button>
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
