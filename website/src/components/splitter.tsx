'use client'

import {
  Splitter as ArkSplitter,
  type SplitterProps as ArkSplitterProps,
} from '@ark-ui/react/splitter'
import { styled } from 'styled-system/jsx'
import { splitter, type SplitterVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/splitter'

export type SplitterProps = SplitterVariantProps & ArkSplitterProps
export const Splitter = styled(ArkSplitter, splitter)
