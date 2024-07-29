import { ChevronDownIcon } from 'lucide-react'
import { Accordion } from '~/components/ui/accordion'
import { Link } from '~/components/ui/link'

export const Faq = () => {
  const questions = [
    {
      question: 'Why support different JavaScript frameworks?',
      answer: (
        <>
          Supporting various JavaScript frameworks lets you create design systems that work well on
          different platforms. It gives developers the freedom to pick the tools that suit their
          skills and project needs, boosting productivity and making it easier to maintain the
          codebase over time.
        </>
      ),
    },
    {
      question: 'Which JavaScript frameworks are supported?',
      answer: (
        <>
          Park UI, built on top of Ark UI, supports React, Solid, and Vue. We're planning to add
          Svelte support later this year.
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
