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
      className="dark"
      background="grayPalette.900"
    >
      <TabList bg="grayPalette.950" gap="0" pt="1" px="1.5">
        <TabTrigger value="panda" pb="1!">
          Panda
        </TabTrigger>
        <TabTrigger value="tailwind" pb="1!">
          Tailwind
        </TabTrigger>
        <TabIndicator />
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
