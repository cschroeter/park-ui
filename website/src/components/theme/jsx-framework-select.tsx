import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Select } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'

export const JsxFrameworkSelect = () => {
  const { currentJsxFramework, jsxFrameworks, updateJsxFramework } = useThemeGenerator()

  return (
    <Select.Root
      items={jsxFrameworks}
      value={[currentJsxFramework]}
      // @ts-expect-error
      onValueChange={(e) => updateJsxFramework(e.items[0])}
      positioning={{ sameWidth: true }}
      size="sm"
    >
      <Select.Label>JSX Framework</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText />
          <ChevronsUpDownIcon />
        </Select.Trigger>
      </Select.Control>
      <Select.Positioner>
        <Select.Content>
          {jsxFrameworks.map((jsxFramework, id) => (
            <Select.Item key={id} item={jsxFramework}>
              <Select.ItemText>{jsxFramework}</Select.ItemText>
              <Select.ItemIndicator>
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Positioner>
    </Select.Root>
  )
}
