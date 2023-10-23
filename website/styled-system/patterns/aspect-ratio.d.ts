/* eslint-disable */
import type { ConditionalValue, SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface AspectRatioProperties {
  ratio?: ConditionalValue<number>
}

interface AspectRatioStyles
  extends AspectRatioProperties,
    DistributiveOmit<SystemStyleObject, keyof AspectRatioProperties | 'aspectRatio'> {}

interface AspectRatioPatternFn {
  (styles?: AspectRatioStyles): string
  raw: (styles?: AspectRatioStyles) => SystemStyleObject
}

export declare const aspectRatio: AspectRatioPatternFn
