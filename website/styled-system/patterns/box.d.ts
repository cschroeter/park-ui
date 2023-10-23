/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface BoxProperties {}

interface BoxStyles
  extends BoxProperties,
    DistributiveOmit<SystemStyleObject, keyof BoxProperties> {}

interface BoxPatternFn {
  (styles?: BoxStyles): string
  raw: (styles?: BoxStyles) => SystemStyleObject
}

export declare const box: BoxPatternFn
