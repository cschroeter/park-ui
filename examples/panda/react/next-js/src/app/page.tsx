'use client'
import { Container } from 'styled-system/jsx'
import { Button, RadioButtonGroup, Slider, Tabs } from '~/components/ui'

export default function Home() {
  return (
    <Container py={{ base: '12', md: '16' }} maxW="7xl">
      <Tabs.Root defaultValue="button">
        <Tabs.List>
          <Tabs.Trigger value="button">Button</Tabs.Trigger>
          <Tabs.Trigger value="radio">Radio Group</Tabs.Trigger>
          <Tabs.Trigger value="slider">Slider</Tabs.Trigger>
          <Tabs.Indicator />
        </Tabs.List>
        <Tabs.Content value="button">
          <Button size="md">Hello Park UI</Button>
        </Tabs.Content>
        <Tabs.Content value="radio">
          <RadioButtonGroup.Root defaultValue="react">
            {[{ value: 'S' }, { value: 'M' }, { value: 'L', disabled: true }, { value: 'XL' }].map(
              (option, id) => (
                <RadioButtonGroup.Item key={id} value={option.value} disabled={option.disabled}>
                  <RadioButtonGroup.ItemControl />
                  <RadioButtonGroup.Label>{option.value}</RadioButtonGroup.Label>
                </RadioButtonGroup.Item>
              ),
            )}
          </RadioButtonGroup.Root>
        </Tabs.Content>
        <Tabs.Content value="slider">
          <Slider.Root min={0} max={100} defaultValue={[33]}>
            <Slider.Control>
              <Slider.Track>
                <Slider.Range />
              </Slider.Track>
              <Slider.Thumb index={0} />
            </Slider.Control>
            <Slider.MarkerGroup>
              <Slider.Marker value={25}>25</Slider.Marker>
              <Slider.Marker value={50}>50</Slider.Marker>
              <Slider.Marker value={75}>75</Slider.Marker>
            </Slider.MarkerGroup>
          </Slider.Root>
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  )
}
