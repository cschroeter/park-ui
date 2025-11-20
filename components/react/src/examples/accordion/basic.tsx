import { Accordion } from '@/components/ui'

export const App = () => {
  return (
    <Accordion.Root defaultValue={['What is Park UI?']} multiple>
      {faqItems.map((item) => (
        <Accordion.Item key={item.question} value={item.question}>
          <Accordion.ItemTrigger>
            {item.question}
            <Accordion.ItemIndicator />
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <Accordion.ItemBody>{item.answer}</Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}

const faqItems = [
  {
    question: 'What is Park UI?',
    answer: 'A beautiful component library built with Ark UI and Panda CSS.',
  },
  {
    question: 'How do I get started?',
    answer: 'Visit our documentation for installation and usage guides.',
  },
  {
    question: 'Is it free to use?',
    answer: 'Yes! Park UI is completely free and open source.',
  },
]
