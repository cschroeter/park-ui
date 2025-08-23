import { Box } from 'styled-system/jsx'
import { Tabs } from '@/components/ui'
import { getServerContext } from '~/server-context'
import { CodeSnippet } from './code-snippet'

export const InstallationGuide = () => {
  const { component } = getServerContext()
  const code = `npx @park-ui/cli@next add ${component}`

  return (
    <Tabs.Root defaultValue="cli">
      <Tabs.List>
        <Tabs.Trigger value="cli">CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="cli" pt="6">
        <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
          <CodeSnippet code={code} lang="bash" />
        </Box>
      </Tabs.Content>
      <Tabs.Content value="manual" pt="6">
        {/* <ManualIntallationGuide /> */}
      </Tabs.Content>
    </Tabs.Root>
  )
}
