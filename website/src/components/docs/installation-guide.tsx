import { Tabs } from '@/components/ui'
import { getServerContext } from '~/server-context'
import type { SourceCode } from '~/types'
import { CodeSnippet } from './code-snippet'
import { ManualIntallationGuide } from './manual-installation-guide'

export const InstallationGuide = () => {
  const { component } = getServerContext()
  const sourceCode: SourceCode = { code: `npx @park-ui/cli@next add ${component}`, lang: 'bash' }

  return (
    <Tabs.Root defaultValue="cli" gap="6">
      <Tabs.List>
        <Tabs.Trigger value="cli">CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="cli">
        <CodeSnippet sourceCode={sourceCode} my="0" />
      </Tabs.Content>
      <Tabs.Content value="manual">
        <ManualIntallationGuide />
      </Tabs.Content>
    </Tabs.Root>
  )
}
