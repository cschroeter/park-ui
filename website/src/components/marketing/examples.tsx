'use client'
import { Container } from 'styled-system/jsx'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '../tabs'
import { Authentication } from './examples/authentication'
import { ECommerce } from './examples/e-commerce'
import { Marketing } from './examples/marketing'

export const Examples = () => {
  return (
    <Container pb={{ base: '16', md: '24' }} pt={{ base: '16' }} id="examples">
      <Tabs defaultValue="authentication">
        <TabList>
          <TabTrigger value="authentication">Authentication</TabTrigger>
          <TabTrigger value="e-commerce">E-Commerce</TabTrigger>
          <TabTrigger value="marketing">Marketing</TabTrigger>
          <TabIndicator />
        </TabList>
        <TabContent value="authentication">
          <Authentication />
        </TabContent>
        <TabContent value="e-commerce">
          <ECommerce />
        </TabContent>
        <TabContent value="marketing">
          <Marketing />
        </TabContent>
      </Tabs>
    </Container>
  )
}
