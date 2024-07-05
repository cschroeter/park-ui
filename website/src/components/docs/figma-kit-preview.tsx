import { Box, Flex } from 'styled-system/jsx'

interface Props {
  variant: 'foundation' | 'pro'
}

export const FigmaKitPreview = (props: Props) =>
  props.variant === 'foundation' ? (
    <Flex bg="bg.subtle" borderRadius="l3" borderWidth="1px" overflow="hidden" my="12">
      <iframe
        title="Fimga Kit Preview"
        width="100%"
        height="352px"
        src="https://embed.figma.com/file/1268615283036362769/hf_embed?community_viewer=true&embed_host=parkui"
      />
    </Flex>
  ) : (
    <a
      href="https://www.figma.com/file/wHbbw1P5b55vuPOhVfiPsx"
      target="_blank"
      rel="noreferrer"
      aria-label="Preview Park UI Figma Kit Pro"
    >
      <Box
        borderWidth="1px"
        borderRadius="l3"
        background="url(/figma-kit-preview.jpg)"
        backgroundSize="cover"
        height="352px"
      />
    </a>
  )
