'use client'
import { MenuSeparator, Portal } from '@ark-ui/react'
import { useState } from 'react'
import { FiArrowRight, FiExternalLink, FiMoreVertical } from 'react-icons/fi'
import { css, cx } from 'styled-system/css'
import { Container, HStack, Spacer } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'
import { Button } from '../ui/button'
import { Menu, MenuContent, MenuItem, MenuPositioner, MenuTrigger } from '../ui/menu'
import { Authentication } from './examples/authentication'
import { Cards } from './examples/cards'
import { ECommerce } from './examples/e-commerce'
import { Marketing } from './examples/marketing'

const examples = [
  {
    value: 'authentication',
    label: 'Authentication',
    component: Authentication,
  },
  {
    value: 'cards',
    label: 'Cards',
    component: Cards,
  },
  {
    value: 'e-commerce',
    label: 'E-Commerce',
    component: ECommerce,
  },
  {
    value: 'marketing',
    label: 'Marketing',
    component: Marketing,
  },
]

export const Examples = () => {
  const [activeTab, setActiveTab] = useState('authentication')
  return (
    <Container pb={{ base: '16', md: '24' }} pt={{ base: '16' }} id="examples">
      <Tabs value={activeTab} onChange={(e) => setActiveTab(e.value!)}>
        <TabList>
          {examples.map((example, id) => (
            <TabTrigger
              key={example.value}
              value={example.value}
              display={{ base: id > 1 ? 'none' : 'initial', md: 'initial' }}
            >
              {example.label}
            </TabTrigger>
          ))}
          <TabIndicator />
          <Spacer />
          <a
            href={`https://github.com/cschroeter/park-ui/tree/main/website/src/components/marketing/examples/${activeTab}`}
            target="_blank"
            className={cx(
              button({ variant: 'link', size: 'sm' }),
              css({ alignSelf: 'flex-start', display: { base: 'none', md: 'inline-flex' } }),
            )}
          >
            Get Code <FiArrowRight />
          </a>
          <Menu size="xs" positioning={{ placement: 'bottom-end' }}>
            <MenuTrigger asChild>
              <Button
                aria-label="Open Menu"
                variant="tertiary"
                size="sm"
                px="0"
                display={{ md: 'none' }}
                transform="translateY(-0.25rem)"
              >
                <FiMoreVertical />
              </Button>
            </MenuTrigger>
            <Portal>
              <MenuPositioner>
                <MenuContent minW="10rem">
                  {examples.slice(2).map((example) => (
                    <MenuItem
                      id={example.value}
                      key={example.value}
                      onClick={() => setActiveTab(example.value)}
                    >
                      {example.label}
                    </MenuItem>
                  ))}
                  <MenuSeparator />
                  <MenuItem id="examples" asChild>
                    <a
                      href={`https://github.com/cschroeter/park-ui/tree/main/website/src/components/marketing/examples/${activeTab}`}
                      target="_blank"
                    >
                      <HStack justify="space-between" width="full">
                        Get Code
                        <FiExternalLink />
                      </HStack>
                    </a>
                  </MenuItem>
                </MenuContent>
              </MenuPositioner>
            </Portal>
          </Menu>
        </TabList>
        {examples.map((example) => (
          <TabContent key={example.value} value={example.value} lazyMount unmountOnExit>
            <example.component />
          </TabContent>
        ))}
      </Tabs>
    </Container>
  )
}
