import { ChevronDownIcon } from 'lucide-react'
import { Accordion, Link } from '~/components/ui'

export const Faq = () => {
  const questions = [
    {
      question: 'Why support various JS and CSS frameworks?',
      answer: (
        <>
          Supporting a wide range of JS and CSS frameworks allows for flexible design systems that
          work well across different platforms. It offers developers the freedom to choose the tools
          that best match their skills and project needs, which can boost productivity and help
          maintain the codebase effectively over time.
        </>
      ),
    },
    {
      question: 'Which JS frameworks are supported?',
      answer: (
        <>
          Park UI is built on top of Ark UI and, consequently, supports the following JS frameworks:
          React, Solid, and Vue. However, you can still use Park UI styles with other JS frameworks.
          In such cases, you'll need to replace Ark UI part with a different headless UI library.
        </>
      ),
    },
    {
      question: 'Which CSS frameworks are supported?',
      answer: (
        <>
          Park UI currently supports the following CSS frameworks:{' '}
          <Link href="https://panda-css.com/">Panda CSS</Link> and{' '}
          <Link href="https://tailwindcss.com/">Tailwind CSS</Link>. We intend to add support for{' '}
          <Link href="https://unocss.dev/">UnoCSS</Link> later this year. If you'd like to see
          support for other CSS frameworks, please open an issue on{' '}
          <Link href="https://github.com/cschroeter/park-ui/issues/new">GitHub</Link>.
        </>
      ),
    },
  ]
  return (
    <Accordion.Root defaultValue={[questions[0].question]} multiple className="not-prose">
      {questions.map((item, id) => (
        <Accordion.Item key={id} value={item.question}>
          <Accordion.ItemTrigger>
            {item.question}
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item.answer}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
