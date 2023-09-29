import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { Stack } from 'styled-system/jsx'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { Button } from '~/components/ui/button'
import { Heading, Typography } from '~/components/ui/typography'
import { questions } from './data'

export const FaqSection = () => {
  const [showAll, setShowAll] = useState(false)
  return (
    <Stack gap={{ base: '12', lg: '24' }} direction={{ base: 'column', lg: 'row' }}>
      <Stack
        gap={{ base: '4', md: '5' }}
        maxW={{ lg: 'md' }}
        textAlign={{ base: 'center', lg: 'start' }}
      >
        <Stack gap="3">
          <Typography
            color="accent.default"
            textStyle={{ base: 'sm', md: 'md' }}
            fontWeight="semibold"
          >
            Support
          </Typography>
          <Heading textStyle={{ base: '3xl', md: '4xl' }}>FAQs</Heading>
        </Stack>
        <Typography color="fg.muted" textStyle="lg">
          Find quick answers to commonly asked questions about our pricing plans and services.
        </Typography>
      </Stack>

      <Stack gap="8" flex="1">
        <Accordion multiple defaultValue={['0']}>
          {questions.slice(0, showAll ? questions.length : 5).map(({ question, answer }, id) => (
            <AccordionItem key={id} value={String(id)}>
              {({ isOpen }) => (
                <>
                  <AccordionTrigger textStyle="lg" fontWeight="semibold">
                    {question}
                    <AccordionIcon isOpen={isOpen} />
                  </AccordionTrigger>
                  <AccordionContent>
                    <div>
                      <Typography color="fg.muted">{answer}</Typography>
                    </div>
                  </AccordionContent>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        <Button
          size="xl"
          alignSelf="center"
          variant="outline"
          onClick={() => setShowAll(true)}
          display={showAll ? 'none' : 'flex'}
        >
          Show more FAQs
        </Button>
      </Stack>
    </Stack>
  )
}

const AccordionIcon = (props: { isOpen: boolean }) => {
  const iconStyles = {
    transform: props.isOpen ? 'rotate(-180deg)' : undefined,
    transition: 'transform 0.2s',
    transformOrigin: 'center',
  }
  return <ChevronDownIcon size="18" style={iconStyles} />
}
