'use client'
import { Tabs as ArkTabs, type TabsProps as ArkTabsProps } from '@ark-ui/react/tabs'
import { styled } from 'styled-system/jsx'
import { tabs, type TabsVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/tabs'

export type TabsProps = TabsVariantProps & ArkTabsProps
export const Tabs = styled(ArkTabs, tabs)
