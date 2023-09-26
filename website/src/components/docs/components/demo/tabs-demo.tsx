import {
  TabContent,
  TabIndicator,
  TabList,
  TabTrigger,
  Tabs,
  type TabsProps,
} from '~/components/ui/tabs'

export const TabsDemo = (props: TabsProps) => {
  const options = [
    { id: 'react', label: 'React' },
    { id: 'solid', label: 'Solid' },
    { id: 'svelte', label: 'Svelte', disabled: true },
    { id: 'vue', label: 'Vue' },
  ]
  return (
    <Tabs defaultValue="react" {...props}>
      <TabList>
        {options.map((option) => (
          <TabTrigger key={option.id} value={option.id} disabled={option.disabled}>
            {option.label}
          </TabTrigger>
        ))}
        <TabIndicator />
      </TabList>
      <TabContent value="react">&nbsp;</TabContent>
      <TabContent value="solid">&nbsp;</TabContent>
      <TabContent value="svelte">&nbsp;</TabContent>
      <TabContent value="vue">&nbsp;</TabContent>
    </Tabs>
  )
}
