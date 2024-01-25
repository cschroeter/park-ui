import { Stack } from 'styled-system/jsx'
import { FormLabel, Tabs } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import type { JSFramework } from '~/lib/use-theme-store'

export const JSFrameworkTabs = () => {
  const { currentJSFramework, jsFrameworks, updateJSFramework } = useThemeGenerator()

  return (
    <Stack gap="1.5">
      <FormLabel>JS Framework</FormLabel>
      <Tabs.Root
        size="sm"
        value={currentJSFramework}
        variant="enclosed"
        onValueChange={(e) => updateJSFramework(e.value as JSFramework)}
      >
        <Tabs.List>
          {jsFrameworks.map((jsFramework) => (
            <Tabs.Trigger key={jsFramework} value={jsFramework} flex="1" textTransform="capitalize">
              {jsFramework}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
    </Stack>
  )
}
