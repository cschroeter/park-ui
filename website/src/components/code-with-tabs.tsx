import { Stack } from 'styled-system/jsx'
import { TabContent, TabList, TabTrigger, Tabs } from './ui'

export const CodeWithTabs = (props: any) => {
  return (
    <Stack gap="10">
      <Tabs
        variant="outline"
        defaultValue="solid"
        size="sm"
        bg="bg.subtle"
        overflow="hidden"
        borderBottomRadius="l3"
      >
        <TabList borderXWidth="1px" pt="1">
          <TabTrigger value="react" ms="-1px">
            React
          </TabTrigger>
          <TabTrigger value="solid">Solid</TabTrigger>
        </TabList>
        <TabContent value="react" borderBottomRadius="l3">
          {props.code}
        </TabContent>
        <TabContent value="solid" borderBottomRadius="l3">
          {props.code}
        </TabContent>
      </Tabs>

      {/* <Tabs
        variant="outline"
        defaultValue="solid"
        size="sm"
        bg="bg.subtle"
        overflow="hidden"
        borderTopWidth="1px"
        borderRadius="l3"
      >
        <TabList mt="-1px">
          <TabTrigger value="react">React</TabTrigger>
          <TabTrigger value="solid">Solid</TabTrigger>
        </TabList>
        <TabContent value="react" borderBottomRadius="l3">
          {props.code}
        </TabContent>
        <TabContent value="solid" borderBottomRadius="l3">
          {props.code}
        </TabContent>
      </Tabs>
 */}

      {/* <Tabs defaultValue="solid" size="sm" borderWidth="1px" borderRadius="l3" overflow="hidden">
        <TabList bg="bg.subtle" gap="0" pt="1">
          <TabTrigger value="react" px="4!" pb="1!">
            React
          </TabTrigger>
          <TabTrigger value="solid" px="4!" pb="1!">
            Solid
          </TabTrigger>
          <TabIndicator />
        </TabList>
        <TabContent value="react" p="4!">
          {props.code}
        </TabContent>
        <TabContent value="solid" p="4!">
          {props.code}
        </TabContent>
      </Tabs> */}
    </Stack>
  )
}
