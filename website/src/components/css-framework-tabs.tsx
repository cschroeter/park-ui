import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from './ui'

type Props = {
  panda?: JSX.Element
  tailwind?: JSX.Element
}

export const CSSFrameworkTabs = (props: Props) => {
  return (
    <Tabs
      defaultValue="panda"
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
        boxShadow="0 -1px 0 0 inset var(--colors-gray-a3)"
      >
        <TabTrigger
          value="panda"
          pb="2!"
          color="gray.dark.11"
          _selected={{ color: 'gray.dark.12' }}
        >
          Panda
        </TabTrigger>
        <TabTrigger
          value="tailwind"
          pb="2!"
          color="gray.dark.11"
          _selected={{ color: 'gray.dark.12' }}
        >
          Tailwind
        </TabTrigger>
        <TabIndicator bg="white" />
      </TabList>
      <TabContent value="panda" p="0!">
        {props.panda}
      </TabContent>
      <TabContent value="tailwind" p="0!">
        {props.tailwind}
      </TabContent>
    </Tabs>
  )
}
