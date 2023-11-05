import { Accordion } from '~/components/ui'

export const Faq = () => {
  const questions = [
    {
      question: 'Why support various JS and CSS frameworks?',
      answer: (
        <div>
          Supporting a wide range of JS and CSS frameworks allows for flexible design systems that
          work well across different platforms. It offers developers the freedom to choose the tools
          that best match their skills and project needs, which can boost productivity and help
          maintain the codebase effectively over time.
        </div>
      ),
    },
    {
      question: 'Which JS frameworks are supported?',
      answer: (
        <div>
          Park UI is built on top of Ark UI and, consequently, supports the following JS frameworks:
          React, Solid, and Vue. However, you can still use Park UI styles with other JS frameworks.
          In such cases, you'll need to replace Ark UI part with a different headless UI library.
        </div>
      ),
    },
    {
      question: 'Which CSS frameworks are supported?',
      answer: (
        <div>
          Park UI currently supports the following CSS frameworks:{' '}
          <a href="https://panda-css.com/">Panda CSS</a> and{' '}
          <a href="https://tailwindcss.com/">Tailwind CSS</a>. We intend to add support for{' '}
          <a href="https://unocss.dev/">UnoCSS</a> later this year. If you'd like to see support for
          other CSS frameworks, please open an issue on{' '}
          <a href="https://github.com/cschroeter/park-ui/issues/new">GitHub</a>.
        </div>
      ),
    },
  ]
  return (
    <Accordion.Root defaultValue={[questions[0].question]} multiple>
      {questions.map((item, id) => (
        <Accordion.Item key={id} value={item.question}>
          <Accordion.ItemTrigger>
            {item.question}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>{item.answer}</Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
