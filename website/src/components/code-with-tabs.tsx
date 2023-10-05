import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from './ui'

type Props = {
  react?: JSX.Element
  solid?: JSX.Element
  vue?: JSX.Element
}

export const CodeWithTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="react"
      size="sm"
      borderWidth="1px"
      borderRadius="l3"
      overflow="hidden"
      className="dark"
      background="grayPalette.900"
    >
      <TabList bg="grayPalette.950" gap="0" pt="1" px="1.5">
        <TabTrigger value="react" pb="1!">
          React
        </TabTrigger>
        <TabTrigger value="solid" pb="1!">
          Solid
        </TabTrigger>
        <TabTrigger value="vue" pb="1!">
          Vue
        </TabTrigger>
        <TabIndicator />
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
