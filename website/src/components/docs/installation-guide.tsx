import { Step, Steps, Text } from '~/components/ui'
import { Recipe } from './recipe'
import { Snippet } from './snippet'

export const InstallationGuide = () => {
  return (
    <Steps>
      <Step number="1" title="Add Component">
        <Text>Insert code snippet into your project. Update import paths as needed.</Text>
        <Snippet />
      </Step>
      <Step number="2" title="Add Recipe">
        <Text>This step is only necessary if you don't use the Park UI Panda Preset.</Text>
        <Recipe />
      </Step>
    </Steps>
  )
}
