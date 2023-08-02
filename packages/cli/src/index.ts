import { confirm, intro, outro, select } from '@clack/prompts'

const main = async () => {
  console.clear()
  intro(`Park UI`)

  await select({
    message: 'Which component would you like to generate?',
    options: [
      { value: 'accordion', label: 'Accordion' },
      { value: 'badge', label: 'Badge' },
      { value: 'carousel', label: 'Carousel' },
    ],
  })

  await confirm({
    message: 'Ready to install components and dependencies?',
  })

  // Do stuff
  outro(`You're all set!`)
}

main()
