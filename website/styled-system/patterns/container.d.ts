/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface ContainerProperties {}

interface ContainerStyles
  extends ContainerProperties,
    DistributiveOmit<SystemStyleObject, keyof ContainerProperties> {}

interface ContainerPatternFn {
  (styles?: ContainerStyles): string
  raw: (styles?: ContainerStyles) => SystemStyleObject
}

export declare const container: ContainerPatternFn
