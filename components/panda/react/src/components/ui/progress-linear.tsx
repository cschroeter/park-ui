import { Progress as ArkProgress } from '@ark-ui/react/progress'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { progressLinear } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(progressLinear)

const Progress = withProvider(ArkProgress.Root, 'root')
const ProgressLabel = withContext(styled(ArkProgress.Label), 'label')
const ProgressValueText = withContext(styled(ArkProgress.ValueText), 'valueText')
const ProgressIndicator = withContext(styled(ArkProgress.Indicator), 'indicator')
const ProgressTrack = withContext(styled(ArkProgress.Track), 'track')
const ProgressRange = withContext(styled(ArkProgress.Range), 'range')

const Root = Progress
const Label = ProgressLabel
const ValueText = ProgressValueText
const Indicator = ProgressIndicator
const Track = ProgressTrack
const Range = ProgressRange

export { Indicator, Label, Range, Root, Track, ValueText }

export interface ProgressProps extends ComponentProps<typeof Progress> {}
export interface ProgressLabelProps extends ComponentProps<typeof ProgressLabel> {}
export interface ProgressValueTextProps extends ComponentProps<typeof ProgressValueText> {}
export interface ProgressIndicatorProps extends ComponentProps<typeof ProgressIndicator> {}
export interface ProgressTrackProps extends ComponentProps<typeof ProgressTrack> {}
export interface ProgressRangeProps extends ComponentProps<typeof ProgressRange> {}
