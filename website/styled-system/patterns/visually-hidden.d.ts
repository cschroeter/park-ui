/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface VisuallyHiddenProperties {}

interface VisuallyHiddenStyles
  extends VisuallyHiddenProperties,
    DistributiveOmit<SystemStyleObject, keyof VisuallyHiddenProperties> {}

interface VisuallyHiddenPatternFn {
  (styles?: VisuallyHiddenStyles): string
  raw: (styles?: VisuallyHiddenStyles) => SystemStyleObject
}

export declare const visuallyHidden: VisuallyHiddenPatternFn
