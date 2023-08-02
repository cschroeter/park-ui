import { Box, Stack } from 'styled-system/jsx'

export const ImageGallery = () => {
  return (
    <Stack gap={{ base: '4', lg: '8' }} direction={{ base: 'column-reverse', lg: 'row' }}>
      <Stack gap={{ base: '3', lg: '4' }} direction={{ base: 'row', lg: 'column' }}>
        {['1', '2', '3', '4'].map((image) => (
          <Box key={image} width="24" borderRadius="sm" overflow="hidden">
            <PlaceholderImage width="96" height="auto" />
          </Box>
        ))}
      </Stack>
      <Box bg="bg.subtle" borderRadius="lg" overflow="hidden">
        <PlaceholderImage width="100%" height="480" />
      </Box>
    </Stack>
  )
}

const PlaceholderImage = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 160" {...props}>
      <rect fill="var(--colors-bg-subtle)" width="210" height="160" />
      <circle fill="var(--colors-bg-emphasized)" cx="105" cy="84.4" r="14.08" />
      <path
        fill="var(--colors-bg-emphasized)"
        d="M91.8,40.41l-8,8.8H69.81A8.83,8.83,0,0,0,61,58v52.78a8.83,8.83,0,0,0,8.8,8.8h70.38a8.83,8.83,0,0,0,8.8-8.8V58a8.83,8.83,0,0,0-8.8-8.8H126.25l-8-8.8Zm13.2,66a22,22,0,1,1,22-22A22,22,0,0,1,105,106.39Z"
      />
    </svg>
  )
}
