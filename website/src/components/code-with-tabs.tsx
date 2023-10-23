import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from './ui'

type Props = {
  react?: JSX.Element
  solid?: JSX.Element
  vue?: JSX.Element
}

// TODO there is a bug with nested semanatic token forcing dark mode
export const CodeWithTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="react"
      size="sm"
      borderWidth="1px"
      borderRadius="l3"
      overflow="hidden"
      borderColor="gray.dark.a3"
    >
      <TabList
        bg="gray.dark.1"
        gap="0"
        pt="2"
        px="1.5"
        boxShadow="0 -1px 0 0 inset var(--colors-gray-a4)"
      >
        {['react', 'solid', 'vue'].map((tab) => (
          <TabTrigger
            key={tab}
            value={tab}
            pb="2!"
            color="gray.dark.11"
            _selected={{ color: 'gray.dark.12' }}
            textTransform="capitalize"
          >
            {tab}
          </TabTrigger>
        ))}

        <TabIndicator bg="white" />
      </TabList>
      <TabContent value="react" p="0!">
        {props.react}
      </TabContent>
      <TabContent value="solid" p="0!">
        {props.solid}
      </TabContent>
      <TabContent value="vue" p="0!">
        {props.vue}
      </TabContent>
    </Tabs>
  )
}
