import Image from 'next/image'
import { AspectRatio, Flex } from 'styled-system/jsx'
import coverImage from '~/images/figma-kit-preview.jpg'

interface Props {
  variant: 'foundation' | 'pro'
}

export const FigmaKitPreview = (props: Props) =>
  props.variant === 'foundation' ? (
    <Flex
      bg="bg.subtle"
      borderRadius="l3"
      borderWidth="1px"
      overflow="hidden"
      className="not-prose"
    >
      <iframe
        title="Fimga Kit Preview"
        width="100%"
        height="432px"
        src="https://embed.figma.com/file/1268615283036362769/hf_embed?community_viewer=true&embed_host=parkui"
      />
    </Flex>
  ) : (
    <a
      href="https://www.figma.com/file/wHbbw1P5b55vuPOhVfiPsx"
      target="_blank"
      rel="noreferrer"
      aria-label="Preview Park UI Figma Kit Pro"
      className="not-prose"
    >
      <AspectRatio ratio={16 / 9}>
        <Image
          fill
          src={coverImage}
          alt="Park UI Figma Kit Pro Cover Image"
          style={{
            objectFit: 'cover',
          }}
        />
      </AspectRatio>
    </a>
  )
