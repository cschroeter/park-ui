import { Text } from '@/components/ui'
import { getComponentDefinitions, getRecipe } from '~/app/docs/actions'
import { getServerContext } from '~/server-context'
import { Step, Steps } from '../ui/steps'
import { CodePreviewTabs } from './code-preview-tabs'
import { CodeSnippet } from './code-snippet'

export const ManualIntallationGuide = async () => {
  const { component } = getServerContext()

  const sources = await getComponentDefinitions(component)
  const recipe = await getRecipe(component)

  return (
    <Steps>
      <Step number="1" title="Add Component">
        <Text>Copy the code snippet below into you components folder.</Text>
        <CodePreviewTabs defaultValue="react" sources={sources} />
      </Step>
      <Step number="2" title="Integrate Recipe">
        <Text>Integrate this recipe in to your Panda config.</Text>
        <CodeSnippet sourceCode={recipe} />
      </Step>
    </Steps>
  )
}
