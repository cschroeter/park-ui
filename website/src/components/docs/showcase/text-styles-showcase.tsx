import { Box, Flex } from 'styled-system/jsx'
import { Typography } from '~/components/ui/typography'

export const TextStylesShowcase = () => {
  return (
    <Box mt="-3">
      <TextSwatch textStyle="xs" />
      <TextSwatch textStyle="sm" />
      <TextSwatch textStyle="md" />
      <TextSwatch textStyle="lg" />
      <TextSwatch textStyle="xl" />
      <TextSwatch textStyle="2xl" />
      <TextSwatch textStyle="3xl" />
      <TextSwatch textStyle="4xl" />
      <TextSwatch textStyle="5xl" />
      <TextSwatch textStyle="6xl" />
      <TextSwatch textStyle="7xl" />
    </Box>
  )
}

type TextStyleProps = {
  textStyle:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '8xl'
    | '9xl'
    | 'xs'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
}

const TextSwatch = (props: TextStyleProps) => {
  const { textStyle } = props
  return (
    <Flex alignItems="center" borderBottomWidth="1px" py="8" position="relative">
      <Typography textStyle={textStyle} truncate>
        Ag
      </Typography>
      <Box position="absolute" bottom="0" right="0" borderTopRadius="sm" bg="border.default">
        <Typography textStyle="sm" color="fg.muted" fontWeight="medium" px="2">
          {textStyle}
        </Typography>
      </Box>
    </Flex>
  )
}
