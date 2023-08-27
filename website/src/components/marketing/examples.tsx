'use client'
import { Container } from 'styled-system/jsx'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'
import { Authentication } from './examples/authentication'
import { Cards } from './examples/cards'
import { ECommerce } from './examples/e-commerce'
import { Marketing } from './examples/marketing'

export const Examples = () => {
  return (
    <Container pb={{ base: '16', md: '24' }} pt={{ base: '16' }} id="examples">
      <Tabs defaultValue="authentication">
        <TabList>
          <TabTrigger value="authentication">Authentication</TabTrigger>
          <TabTrigger value="cards">Cards</TabTrigger>
          <TabTrigger value="e-commerce">E-Commerce</TabTrigger>
          <TabTrigger value="marketing">Marketing</TabTrigger>
          <TabIndicator />
        </TabList>
        <TabContent value="authentication" lazyMount unmountOnExit>
          <Authentication />
        </TabContent>
        <TabContent value="cards" lazyMount unmountOnExit>
          <Cards />
        </TabContent>
        <TabContent value="e-commerce" lazyMount unmountOnExit>
          <ECommerce />
        </TabContent>
        <TabContent value="marketing" lazyMount unmountOnExit>
          <Marketing />
        </TabContent>
      </Tabs>
    </Container>
  )
}
