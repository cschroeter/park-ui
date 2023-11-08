import { intro, outro, select } from '@clack/prompts'

intro(`Welcome to Park UI!`)

const cssFramework = await select({
  message: 'Which CSS framework would you like to use?',
  options: [
    { value: 'panda', label: 'Panda CSS' },
    { value: 'tailwind', label: 'Tailwind CSS' },
  ],
})

const jsFramework = await select({
  message: 'Which JS framework would you like to use?',
  options: [
    { value: 'react', label: 'React' },
    { value: 'solid', label: 'Solid' },
    { value: 'vue', label: 'Vue' },
  ],
})

console.log(cssFramework, jsFramework)

outro(`You're all set!!`)
