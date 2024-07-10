import { HStack } from 'styled-system/jsx'
import { RatingGroup, Text } from '~/components/ui'

export const RatingInfo = () => {
  return (
    <HStack gap="1.5">
      <RatingGroup count={5} defaultValue={4} readOnly size="sm" />
      <Text textStyle="xs" textDecoration="underline">
        12 Reviews
      </Text>
    </HStack>
  )
}
