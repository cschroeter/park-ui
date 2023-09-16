'use client'
import { ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'
import { css, cx } from 'styled-system/css'
import { Container, Spacer } from 'styled-system/jsx'
import { button } from 'styled-system/recipes'
import { TabContent, TabIndicator, TabList, TabTrigger, Tabs } from '~/components/ui/tabs'
import { Authentication } from './examples/authentication'
import { Cards } from './examples/cards'
import { ECommerce } from './examples/e-commerce'
import { Editor } from './examples/editor'
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
    value: 'editor',
    label: 'Text Editor',
    component: Editor,
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
            <TabTrigger key={example.value} value={example.value}>
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
            Get Code <ArrowRightIcon />
          </a>
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
