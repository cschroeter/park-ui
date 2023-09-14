import { Portal } from '@ark-ui/react'
import { BiCheck, BiExpandVertical } from 'react-icons/bi'
import {
  FiAlignCenter,
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiBold,
  FiCheckSquare,
  FiCode,
  FiCornerUpLeft,
  FiCornerUpRight,
  FiImage,
  FiItalic,
  FiLink,
  FiList,
  FiPenTool,
  FiRotateCcw,
  FiShare2,
  FiUnderline,
  FiVideo,
} from 'react-icons/fi'
import { Box, Container, Divider, HStack, Wrap } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'
import { Toggle, ToggleGroup } from '~/components/ui/toggle-group'

export const Editor = () => {
  return (
    <Box bg="bg.subtle" borderWidth="1px" borderRadius="l3" overflow="hidden">
      <Box bg="grayPalette.950" py="2" className="dark">
        <Container>
          <HStack justify="space-between">
            <Box>Left</Box>
            <Box>Center</Box>
            <HStack gap="3">
              <Button size="sm" variant="tertiary">
                <FiRotateCcw />
                Reset
              </Button>
              <Button size="sm" variant="primary">
                <FiShare2 />
                Share
              </Button>
            </HStack>
          </HStack>
        </Container>
      </Box>
      <Box bg="bg.default" borderBottomWidth="1px">
        <Container py="1.5" display="flex" justifyContent="center">
          <Wrap gap="2.5" align="center">
            <HStack gap="1">
              <Button px="0" variant="tertiary" size="sm">
                <FiCornerUpLeft />
              </Button>
              <Button px="0" variant="tertiary" size="sm">
                <FiCornerUpRight />
              </Button>
            </HStack>
            <Divider orientation="vertical" h="6" />
            <Select
              items={['Pargraph', 'Heading 1', 'Heading 2', 'Heading 3']}
              defaultValue={['Pargraph']}
              positioning={{ sameWidth: true }}
              size="sm"
              width="32"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Framework" />
                <BiExpandVertical />
              </SelectTrigger>
              <Portal>
                <SelectPositioner zIndex="toast">
                  <SelectContent>
                    {['Pargraph', 'Heading 1', 'Heading 2', 'Heading 3'].map((fontFamily, id) => (
                      <SelectItem key={id} item={fontFamily}>
                        <SelectItemText>{fontFamily}</SelectItemText>
                        <SelectItemIndicator>
                          <BiCheck />
                        </SelectItemIndicator>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectPositioner>
              </Portal>
            </Select>
            <Divider orientation="vertical" h="6" />
            <ToggleGroup multiple size="sm" variant="ghost">
              <Toggle value="bold" aria-label="Toggle Bold">
                <FiBold />
              </Toggle>
              <Toggle value="italic" aria-label="Toggle Italic">
                <FiItalic />
              </Toggle>
              <Toggle value="underline" aria-label="Toggle Underline">
                <FiUnderline />
              </Toggle>
            </ToggleGroup>
            <Divider orientation="vertical" h="6" />
            <ToggleGroup size="sm" variant="ghost">
              <Toggle value="code" aria-label="Align Left">
                <FiCode />
              </Toggle>
              <Toggle value="pen" aria-label="Align Left">
                <FiPenTool />
              </Toggle>
              <Toggle value="link" aria-label="Align Left">
                <FiLink />
              </Toggle>
            </ToggleGroup>
            <Divider orientation="vertical" h="6" />
            <ToggleGroup defaultValue={['left']} size="sm" variant="ghost">
              <Toggle value="left" aria-label="Align Left">
                <FiAlignLeft />
              </Toggle>
              <Toggle value="center" aria-label="Align Center">
                <FiAlignCenter />
              </Toggle>
              <Toggle value="right" aria-label="Align Right">
                <FiAlignRight />
              </Toggle>
              <Toggle value="justify" aria-label="Align Justify">
                <FiAlignJustify />
              </Toggle>
            </ToggleGroup>
            <Divider orientation="vertical" h="6" />
            <ToggleGroup size="sm" variant="ghost" multiple>
              <Toggle value="left" aria-label="Align Left">
                <FiList />
              </Toggle>
              <Toggle value="center" aria-label="Align Center">
                <FiCheckSquare />
              </Toggle>
            </ToggleGroup>
            <Divider orientation="vertical" h="6" />
            <ToggleGroup size="sm" variant="ghost" multiple>
              <Toggle value="left" aria-label="Align Left">
                <FiImage />
              </Toggle>
              <Toggle value="center" aria-label="Align Center">
                <FiVideo />
              </Toggle>
            </ToggleGroup>
          </Wrap>
        </Container>
      </Box>
      <Container maxW="3xl" py="5">
        <Box bg="bg.default" borderWidth="1px" minH="md" />
      </Container>
    </Box>
  )
}
