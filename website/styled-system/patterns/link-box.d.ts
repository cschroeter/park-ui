/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface LinkBoxProperties {}

interface LinkBoxStyles
  extends LinkBoxProperties,
    DistributiveOmit<SystemStyleObject, keyof LinkBoxProperties> {}

interface LinkBoxPatternFn {
  (styles?: LinkBoxStyles): string
  raw: (styles?: LinkBoxStyles) => SystemStyleObject
}

export declare const linkBox: LinkBoxPatternFn
