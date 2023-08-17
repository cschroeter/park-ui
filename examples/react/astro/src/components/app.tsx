import { Container } from 'styled-system/jsx'
import { Button } from './ui/button'
import { Radio, RadioButtonGroup, RadioControl, RadioLabel } from './ui/radio-button-group'
import {
  Slider,
  SliderControl,
  SliderMarker,
  SliderMarkerGroup,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from './ui/slider'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from './ui/tabs'

export const App = () => {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="7xl">
      <Tabs defaultValue="button">
        <TabList>
          <TabTrigger value="button">Button</TabTrigger>
          <TabTrigger value="radio">Radio Group</TabTrigger>
          <TabTrigger value="slider">Range Slider</TabTrigger>
          <TabIndicator />
        </TabList>
        <TabContent value="button">
          <Button size="md">Hello Park UI</Button>
        </TabContent>
        <TabContent value="radio">
          <RadioButtonGroup defaultValue="react">
            {[{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }].map(
              (option, id) => (
                <Radio key={id} value={option.value} disabled={option.disabled}>
                  <RadioControl />
                  <RadioLabel>{option.value}</RadioLabel>
                </Radio>
              ),
            )}
          </RadioButtonGroup>
        </TabContent>
        <TabContent value="slider">
          <Slider min={0} max={100} defaultValue={33}>
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
  )
}
