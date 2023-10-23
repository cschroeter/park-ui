/* eslint-disable */
import type { SystemStyleObject } from '../types/index'
import type { DistributiveOmit } from '../types/system-types'

export interface LinkOverlayProperties {}

interface LinkOverlayStyles
  extends LinkOverlayProperties,
    DistributiveOmit<SystemStyleObject, keyof LinkOverlayProperties> {}

interface LinkOverlayPatternFn {
  (styles?: LinkOverlayStyles): string
  raw: (styles?: LinkOverlayStyles) => SystemStyleObject
}

export declare const linkOverlay: LinkOverlayPatternFn
