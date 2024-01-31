import * as RadioGroup from '~/components/ui/radio-group'

export const Demo = (props: RadioGroup.RootProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <RadioGroup.Root defaultValue="react" {...props}>
      {options.map((option) => (
        <RadioGroup.Item key={option.id} value={option.id} disabled={option.disabled}>
          <RadioGroup.ItemControl />
          <RadioGroup.ItemText>{option.label}</RadioGroup.ItemText>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
