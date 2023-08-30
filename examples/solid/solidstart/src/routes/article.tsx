import { Title } from 'solid-start'

import { Article } from '~/components/ui/article'

export default function Home() {
  return (
    <Article mt="8" marginInline={'auto'}>
      <Title>Park UI | Article</Title>
      <h1>The Beauty of Nature</h1>
      <p>
        Nature, in the broadest sense, is equivalent to the natural world, physical universe,
        material world or material universe.
      </p>
      <p>
        From the luscious <code>green forests</code> to the expansive oceans, nature offers solace
        and inspiration. The beautiful sunrise over a calm sea or the serene sunset on a warm
        evening reminds us of the wonders of this planet.
      </p>
      <blockquote>
        <p>Look deep into nature, and then you will understand everything better</p>
        <p>- Albert Einstein</p>
      </blockquote>
      <p>
        Mount Everest, located in <a href="https://www.nepal.com/">Nepal</a>, stands as the tallest
        peak in the world. It is a testament to nature's magnificence and the human spirit's will to
        conquer.
      </p>
      <pre>
        <code>console.log('Nature is amazing!');</code>
      </pre>
      <p>
        The Amazon rainforest, known as the 'lungs of our planet', provides more than 20% of the
        world's oxygen. This alone speaks volumes of its importance to life on Earth.
      </p>
      <hr />
      <h2>Flora and Fauna</h2>
      <p>
        The diversity of life forms, or biodiversity, can be the source of wonder. From the{' '}
        <em>smallest microorganisms</em>
        to the largest mammals, every species plays a crucial role in the ecosystem.
      </p>
      <h3>Fascinating Animals</h3>
      <p>
        The animal kingdom is diverse and <strong>intriguing</strong>. Elephants, with their immense
        size and yet gentle nature, are often adored by many. On the other hand, cheetahs fascinate
        with their speed and grace.
      </p>
      <p>
        The mysteries of deep oceans, with creatures like the giant squid and the luminescent
        jellyfish, continue to capture our imagination.
      </p>
      <ul>
        <li>The Blue Whale is the largest animal on Earth.</li>
        <li>Penguins are known to thrive in cold climates, particularly Antarctica.</li>
        <li>Monarch butterflies are known for their incredible mass migration.</li>
      </ul>
      <p>
        With so much to explore and learn, nature truly is an endless source of inspiration and
        wonder.
      </p>
    </Article>
  )
}
