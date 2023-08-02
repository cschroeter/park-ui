'use client'
import {
  PinInput as ArkPinInput,
  type PinInputProps as ArkPinInputProps,
} from '@ark-ui/react/pin-input'
import { styled } from 'styled-system/jsx'
import { pinInput, type PinInputVariantProps } from 'styled-system/recipes'

export * from '@ark-ui/react/pin-input'

export type PinInputProps = PinInputVariantProps & ArkPinInputProps
export const PinInput = styled(ArkPinInput, pinInput)
