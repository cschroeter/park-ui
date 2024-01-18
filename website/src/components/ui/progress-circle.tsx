import { Progress as ArkProgress } from '@ark-ui/react/progress'
import type { ComponentProps } from 'react'
import { styled } from 'styled-system/jsx'
import { progressCircle } from 'styled-system/recipes'
import { createStyleContext } from '~/lib/create-style-context'

const { withProvider, withContext } = createStyleContext(progressCircle)

const Progress = withProvider(ArkProgress.Root, 'root')
const ProgressLabel = withContext(styled(ArkProgress.Label), 'label')
const ProgressValueText = withContext(styled(ArkProgress.ValueText), 'valueText')
const ProgressIndicator = withContext(styled(ArkProgress.Indicator), 'indicator')
const ProgressCircle = withContext(styled(ArkProgress.Circle), 'circle')
const ProgressCircleTrack = withContext(styled(ArkProgress.CircleTrack), 'circleTrack')
const ProgressCircleRange = withContext(styled(ArkProgress.CircleRange), 'circleRange')

const Root = Progress
const Label = ProgressLabel
const ValueText = ProgressValueText
const Indicator = ProgressIndicator
const Circle = ProgressCircle
const CircleTrack = ProgressCircleTrack
const CircleRange = ProgressCircleRange

export { Circle, CircleRange, CircleTrack, Indicator, Label, Root, ValueText }

export interface ProgressProps extends ComponentProps<typeof Progress> {}
export interface ProgressLabelProps extends ComponentProps<typeof ProgressLabel> {}
export interface ProgressValueTextProps extends ComponentProps<typeof ProgressValueText> {}
export interface ProgressIndicatorProps extends ComponentProps<typeof ProgressIndicator> {}
export interface ProgressCircleProps extends ComponentProps<typeof ProgressCircle> {}
export interface ProgressCircleTrackProps extends ComponentProps<typeof ProgressCircleTrack> {}
export interface ProgressCircleRangeProps extends ComponentProps<typeof ProgressCircleRange> {}
