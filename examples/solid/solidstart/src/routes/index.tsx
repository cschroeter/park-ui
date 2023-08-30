import { Title } from 'solid-start'

import Counter from '~/components/Counter'

export default function Home() {
  return (
    <>
      <Title>Park UI Demo</Title>
      <h1>Park UI Demo</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{' '}
        to learn how to build SolidStart apps.
      </p>
    </>
  )
}
