import { Container, Stack } from '@styled-system/jsx'
import { For } from 'solid-js'
import { Title } from 'solid-start'

import Counter from '~/components/Counter'
import { BellIcon } from '~/components/icons/bell'
import { MenuIcon } from '~/components/icons/menu'
import { Button } from '~/components/ui/button'
import { IconButton } from '~/components/ui/icon-button'
import {
  Radio,
  RadioButtonGroup,
  RadioControl,
  RadioLabel,
} from '~/components/ui/radio-button-group'
import {
  Slider,
  SliderControl,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from '~/components/ui/slider'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'

export default function Home() {
  return (
    <>
      <Title>Park UI | Demo</Title>
      <Container py={{ base: '12', md: '16' }} maxW="7xl">
        <Tabs value="button">
          <TabList>
            <TabTrigger value="button">Button</TabTrigger>
            <TabTrigger value="radio">Radio Group</TabTrigger>
            <TabTrigger value="slider">Range Slider</TabTrigger>
            <TabIndicator />
          </TabList>
          <TabContent value="button">
            <Stack direction="row" gap="4">
              <Button size="md">Hello Park UI</Button>
              <Counter />
              <IconButton icon={MenuIcon} aria-label="menu" />
              <IconButton aria-label="menu">
                <BellIcon />
              </IconButton>
            </Stack>
          </TabContent>
          <TabContent value="radio">
            <RadioButtonGroup value="S">
              <For
                each={[
                  { value: 'S' },
                  { value: 'M' },
                  { value: 'L', disabled: true },
                  { value: 'XL' },
                ]}
              >
                {(option) => (
                  <Radio value={option.value} disabled={option.disabled}>
                    <RadioControl />
                    <RadioLabel>{option.value}</RadioLabel>
                  </Radio>
                )}
              </For>
            </RadioButtonGroup>
          </TabContent>
          <TabContent value="slider">
            <Slider min={0} max={100} value={33}>
              <SliderControl>
                <SliderTrack>
                  <SliderRange />
                </SliderTrack>
                <SliderThumb />
              </SliderControl>
              <SliderMarkerGroup>
                <SliderMarker value={25}>25</SliderMarker>
                <SliderMarker value={50}>50</SliderMarker>
                <SliderMarker value={75}>75</SliderMarker>
              </SliderMarkerGroup>
            </Slider>
          </TabContent>
        </Tabs>
      </Container>
    </>
  )
}
