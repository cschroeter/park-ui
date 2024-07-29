import { RadioGroup } from '~/components/ui/radio-group'

export const Demo = (props: RadioGroup.RootProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte' },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <RadioGroup.Root defaultValue="react" {...props}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.id === 'svelte'}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
          <RadioGroup.ItemHiddenInput />
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
