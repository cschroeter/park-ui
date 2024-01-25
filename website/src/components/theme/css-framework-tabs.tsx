import { Stack } from 'styled-system/jsx'
import { FormLabel, Tabs } from '~/components/ui'
import { useThemeGenerator } from '~/lib/use-theme-generator'
import type { CSSFramework } from '~/lib/use-theme-store'

export const CSSFrameworkTabs = () => {
  const { currentCSSFramework, cssFrameworks, updateCSSFramework } = useThemeGenerator()
  return (
    <Stack gap="1.5">
      <FormLabel>CSS Framework</FormLabel>
      <Tabs.Root
        size="sm"
        value={currentCSSFramework}
        variant="enclosed"
        onValueChange={(e) => updateCSSFramework(e.value as CSSFramework)}
      >
        <Tabs.List>
          {cssFrameworks.map((cssFramework) => (
            <Tabs.Trigger
              key={cssFramework}
              value={cssFramework}
              flex="1"
              textTransform="capitalize"
            >
              {cssFramework}
            </Tabs.Trigger>
          ))}
          <Tabs.Indicator />
        </Tabs.List>
      </Tabs.Root>
    </Stack>
  )
}
